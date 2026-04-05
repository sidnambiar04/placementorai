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
        raise HTTPException(status_code=500, detail=str(e))
