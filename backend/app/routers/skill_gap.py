"""
Skill gap analysis router.
"""
import json
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, Any
from app.ai.gemini_client import client, MODEL, SAFETY_SETTINGS, _extract_json
from app.ai.prompts.skill_gap_prompt import build_skill_gap_prompt

router = APIRouter()


class SkillGapRequest(BaseModel):
    name: str = "Candidate"
    dreamRole: str = "Software Engineer"
    experienceLevel: str = "Beginner"
    pastExperience: str = ""
    knownSkills: list = []
    previousAnalysis: Optional[Any] = None


@router.post("/analyze")
async def analyze_skill_gap(req: SkillGapRequest):
    try:
        prompt = build_skill_gap_prompt(
            name=req.name,
            dream_role=req.dreamRole,
            experience_level=req.experienceLevel,
            past_experience=req.pastExperience,
            known_skills=req.knownSkills,
            previous_analysis=req.previousAnalysis,
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
        print(f"DEBUG RAW SKILL GAP (first 300): {raw[:300]}")

        cleaned = _extract_json(raw)
        report = json.loads(cleaned)

        if not isinstance(report, dict):
            raise ValueError("Expected a JSON object from Gemini")

        return {"report": report}

    except Exception as e:
        err_str = str(e).upper()
        print(f"ERROR analyze_skill_gap: {e}")
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            print("FALLBACK: Using mock data for skill gap due to quota limit.")
            return {"report": get_mock_skill_gap(req.dreamRole, req.experienceLevel), "is_mock": True}
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_skill_gap(role: str, level: str):
    return {
        "role": role,
        "level": level,
        "summary": f"Your profile shows strong potential for {role}, but there are key technical gaps in cloud architecture and system design that need addressing.",
        "atsScore": 72,
        "skillMatch": 65,
        "readiness": "Medium",
        "topCompanies": ["Google", "Amazon", "Microsoft", "Meta", "Netflix"],
        "skillsHave": ["JavaScript", "React", "Node.js", "HTML/CSS", "Git"],
        "skillsMissing": ["Docker", "Kubernetes", "Redis", "System Design", "AWS"],
        "roadmap": [
          {"rank": 1, "name": "Containerization Mastery", "desc": "Learn Docker fundamentals and container orchestration with Kubernetes.", "priority": "High"},
          {"rank": 2, "name": "System Design Patterns", "desc": "Study load balancing, caching strategies, and database sharding.", "priority": "High"},
          {"rank": 3, "name": "Cloud Infrastructure", "desc": "Get hands-on experience with AWS EC2, S3, and Lambda.", "priority": "Medium"}
        ],
        "categories": [
          {"name": "Frontend Dev", "pct": 85, "icon": "🎨", "sub": "Excellent React skills", "level": "high"},
          {"name": "Backend / API", "pct": 60, "icon": "⚙️", "sub": "Needs more Node optimization", "level": "mid"},
          {"name": "DevOps", "pct": 30, "icon": "🚀", "sub": "Large gap in CI/CD knowledge", "level": "low"}
        ],
        "insights": [
          {"title": "Open Source Focus", "desc": "Contributing to 2+ repos will boost your credibility for this role."},
          {"title": "Certification Tip", "desc": "An AWS Cloud Practitioner cert would bridge your infra gap quickly."}
        ],
        "weakAreas": [
          {"icon": "⚠️", "title": "Scalability", "desc": "Your projects lack handling of high-concurrency scenarios."},
          {"icon": "⚠️", "title": "Testing", "desc": "Unit and Integration test coverage is missing from your recent repos."}
        ]
    }
