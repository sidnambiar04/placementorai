"""
Company recommendations router — generates AI-powered company matches.
"""
import json
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Any
from app.ai.gemini_client import call_gemini, _extract_json, get_cached_result, set_cached_result
from app.ai.prompts.skill_gap_prompt import build_company_recommendations_prompt

router = APIRouter()


class RecommendRequest(BaseModel):
    role: str
    skills: List[str] = []
    experience: str = "Beginner"
    resumeContext: Optional[Any] = None


@router.post("/recommend-companies")
async def recommend_companies(req: RecommendRequest):
    try:
        cache_payload = {
            "role": req.role,
            "skills": req.skills,
            "experience": req.experience,
            "resumeContext": req.resumeContext,
        }
        cached = get_cached_result("recommendations", cache_payload)
        if cached is not None:
            return cached

        prompt = build_company_recommendations_prompt(
            role=req.role,
            skills=req.skills,
            experience=req.experience,
            resume_context=req.resumeContext,
        )

        response = call_gemini(prompt, feature="recommendations")

        raw = response.text
        print(f"DEBUG RAW COMPANIES (first 300): {raw[:300]}")

        cleaned = _extract_json(raw)
        companies = json.loads(cleaned)

        if not isinstance(companies, list):
            raise ValueError("Expected a JSON array of companies")

        set_cached_result("recommendations", cache_payload, companies, ttl_seconds=43200)
        return companies

    except Exception as e:
        print(f"ERROR recommend_companies: {e}")
        err_str = str(e).upper()
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            print("FALLBACK: Using mock data for company recommendations due to quota limit.")
            return get_mock_company_recommendations(req.role)
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_company_recommendations(role: str):
    return [
        {
            "company": "Razorpay",
            "role": f"{role} • Bangalore / Hybrid",
            "matchScore": 95,
            "vacancies": 8,
            "salaryRange": "₹22L – ₹38L",
            "requiredSkills": ["React", "Node.js", "Redis", "PostgreSQL"],
            "reason": "Top local fintech with a strong engineering culture and active hiring for your role.",
            "applicationUrl": "https://razorpay.com/jobs/",
            "matchedSkills": ["React", "Node.js"],
            "missingSkills": ["Redis", "PostgreSQL"]
        },
        {
            "company": "Swiggy",
            "role": f"{role} • Remote / Hybrid",
            "matchScore": 92,
            "vacancies": 12,
            "salaryRange": "₹18L – ₹32L",
            "requiredSkills": ["React", "Node.js", "Redis", "Docker"],
            "reason": "Hyper-growth consumer tech company with complex scalability challenges and great culture.",
            "applicationUrl": "https://careers.swiggy.com/",
            "matchedSkills": ["React", "Node.js"],
            "missingSkills": ["Redis", "Docker"]
        },
        {
            "company": "CRED",
            "role": f"{role} • Bangalore",
            "matchScore": 89,
            "vacancies": 5,
            "salaryRange": "₹25L – ₹45L",
            "requiredSkills": ["React Native", "TypeScript", "Node.js", "System Design"],
            "reason": "CRED is highly selective and ideal for developers focusing on premium UI/UX and backend efficiency.",
            "applicationUrl": "https://careers.cred.club/",
            "matchedSkills": ["TypeScript", "Node.js"],
            "missingSkills": ["React Native", "System Design"]
        },
        {
            "company": "Zomato",
            "role": f"{role} • Gurgaon / Remote",
            "matchScore": 87,
            "vacancies": 7,
            "salaryRange": "₹15L – ₹28L",
            "requiredSkills": ["React", "Node.js", "GraphQL", "AWS"],
            "reason": "Prominent food-tech brand with high-scale real-time tracking and logistics complexity.",
            "applicationUrl": "https://www.zomato.com/careers",
            "matchedSkills": ["React", "Node.js"],
            "missingSkills": ["GraphQL", "AWS"]
        },
        {
            "company": "Groww",
            "role": f"{role} • Bangalore",
            "matchScore": 85,
            "vacancies": 6,
            "salaryRange": "₹20L – ₹32L",
            "requiredSkills": ["React", "Go", "Kubernetes", "PostgreSQL"],
            "reason": "One of the fastest-growing investment platforms needing strong engineering for reliable financial systems.",
            "applicationUrl": "https://groww.in/careers",
            "matchedSkills": ["React"],
            "missingSkills": ["Go", "Kubernetes", "PostgreSQL"]
        },
        {
            "company": "Meesho",
            "role": f"{role} • Remote",
            "matchScore": 83,
            "vacancies": 10,
            "salaryRange": "₹18L – ₹30L",
            "requiredSkills": ["Java", "React", "Spring Boot", "MySQL"],
            "reason": "Major e-commerce success story focusing on social commerce and large-scale backend systems.",
            "applicationUrl": "https://meesho.io/careers",
            "matchedSkills": ["React"],
            "missingSkills": ["Java", "Spring Boot", "MySQL"]
        }
    ]
