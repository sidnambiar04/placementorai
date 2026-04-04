"""
Company recommendations router — generates AI-powered company matches.
"""
import json
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Any
from app.ai.gemini_client import client, MODEL, SAFETY_SETTINGS, _extract_json
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
        prompt = build_company_recommendations_prompt(
            role=req.role,
            skills=req.skills,
            experience=req.experience,
            resume_context=req.resumeContext,
        )

        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config={
                "response_mime_type": "application/json",
                "safety_settings": SAFETY_SETTINGS,
            }
        )

        raw = response.text
        print(f"DEBUG RAW COMPANIES (first 300): {raw[:300]}")

        cleaned = _extract_json(raw)
        companies = json.loads(cleaned)

        if not isinstance(companies, list):
            raise ValueError("Expected a JSON array of companies")

        return companies

    except Exception as e:
        print(f"ERROR recommend_companies: {e}")
        if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
            print("FALLBACK: Using mock data for company recommendations due to quota limit.")
            return get_mock_company_recommendations(req.role)
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_company_recommendations(role: str):
    return [
        {
            "company": "Tech Giant Corp",
            "role": f"Senior {role}",
            "matchScore": 95,
            "vacancies": 12,
            "reason": "Perfect match for your expertise in distributed systems and React.",
            "applicationUrl": "https://www.google.com/about/careers/applications/",
            "matchedSkills": ["React", "System Design"],
            "missingSkills": ["Go", "Kubernetes"]
        },
        {
            "company": "Fast Startup",
            "role": f"Lead {role}",
            "matchScore": 88,
            "vacancies": 3,
            "reason": "They are looking for someone with your specific experience in scaling microservices.",
            "applicationUrl": "https://www.ycombinator.com/jobs",
            "matchedSkills": ["Node.js", "Docker"],
            "missingSkills": ["AWS", "Redis"]
        },
        {
            "company": "Global Solutions",
            "role": role,
            "matchScore": 82,
            "vacancies": 25,
            "reason": "Good entry point for large scale enterprise applications.",
            "applicationUrl": "https://www.accenture.com/us-en/careers",
            "matchedSkills": ["JavaScript", "HTML/CSS"],
            "missingSkills": ["SQL", "Java"]
        }
    ]
