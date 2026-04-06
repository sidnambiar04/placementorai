from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.ai.gemini_client import generate_career_roadmap

router = APIRouter()


class GenerateRoadmapRequest(BaseModel):
    currentRole: str
    targetRole: str
    skills: str
    timeline: str
    weakAreas: str = ""


@router.get("/")
async def get_test_roadmap():
    return {"status": "roadmap active"}


@router.post("/generate")
async def generate_roadmap(body: GenerateRoadmapRequest):
    try:
        roadmap = await generate_career_roadmap(
            current_role=body.currentRole,
            target_role=body.targetRole,
            skills=body.skills,
            timeline=body.timeline,
            weak_areas=body.weakAreas,
        )
        return {"roadmap": roadmap}
    except Exception as e:
        err_str = str(e).upper()
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            print("FALLBACK: Using mock data for roadmap due to quota limit.")
            return {
                "roadmap": get_mock_roadmap(body.currentRole, body.targetRole, body.timeline),
                "is_mock": True,
            }
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_roadmap(current_role: str, target_role: str, timeline: str):
    return {
        "summary": f"This is a fallback roadmap from {current_role} to {target_role} across {timeline}.",
        "tips": [
            "Track weekly progress in one tracker.",
            "Practice mock interviews every weekend.",
        ],
        "phases": [
            {
                "title": "Core Foundations",
                "duration": "Weeks 1-4",
                "goals": [
                    "Strengthen role-specific fundamentals.",
                    "Revise DSA and problem solving rhythm.",
                ],
                "resources": [
                    {"title": "NeetCode Roadmap", "url": "https://neetcode.io/roadmap"}
                ],
                "milestones": [
                    "Solve 40 curated questions.",
                    "Publish 1 mini project with README.",
                ],
            },
            {
                "title": "Build and Apply",
                "duration": "Weeks 5-8",
                "goals": [
                    "Build two portfolio projects.",
                    "Align resume with measurable impact.",
                ],
                "resources": [
                    {"title": "Roadmap.sh", "url": "https://roadmap.sh"}
                ],
                "milestones": [
                    "Deploy projects and add case studies.",
                    "Finalize ATS-friendly resume.",
                ],
            },
            {
                "title": "Interview Readiness",
                "duration": "Weeks 9-12",
                "goals": [
                    "Attempt timed mock interviews.",
                    "Improve communication and clarity.",
                ],
                "resources": [
                    {"title": "Pramp", "url": "https://www.pramp.com/"}
                ],
                "milestones": [
                    "Complete 6 mock interviews.",
                    "Apply to 25+ matching roles.",
                ],
            },
        ],
    }
