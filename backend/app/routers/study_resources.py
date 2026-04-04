from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

from app.ai.gemini_client import generate_study_resources

router = APIRouter()

class GenerateResourcesRequest(BaseModel):
    skills: List[str]
    level: str

@router.get("/")
async def health():
    return {"status": "study_resources active"}

@router.post("/generate")
async def generate_resources(body: GenerateResourcesRequest):
    """Generate 4 personalized study resource cards based on skill gaps."""
    try:
        resources = await generate_study_resources(
            skills=body.skills,
            level=body.level,
        )
        return {
            "resources": resources,
            "metadata": {
                "skills_processed": body.skills,
                "level": body.level,
                "count": len(resources),
            },
        }
    except Exception as e:
        print(f"DEBUG ERROR STUDY RESOURCES: {e}")
        if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
            print("FALLBACK: Using mock data for study resources due to quota limit.")
            return {
                "resources": get_mock_study_resources(body.skills, body.level),
                "is_mock": True
            }
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_study_resources(skills: List[str], level: str):
    return [
        {
            "id": "mock-1",
            "skill": skills[0] if skills else "General CS",
            "priority": "RECOMMENDED",
            "difficulty": level,
            "isMissing": True,
            "iconText": "CS",
            "videos": ["Modern Computer Science Intro", "Computer Architecture Essentials"],
            "notes": ["CS101 Guide - freeCodeCamp", "Harvard CS50 Notes"],
            "practice": ["Binary Search Practice - LeetCode", "Build a Simple Calculator"]
        },
        {
            "id": "mock-2",
            "skill": "System Design",
            "priority": "HIGH",
            "difficulty": "Intermediate",
            "isMissing": True,
            "iconText": "SD",
            "videos": ["System Design for Beginners", "Scaling 101"],
            "notes": ["System Design Primer", "Microservices Guide"],
            "practice": ["Design a URL Shortener", "Load Balancing Exercise"]
        }
    ]
