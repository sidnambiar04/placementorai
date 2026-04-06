from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

from app.ai.gemini_client import generate_study_resources

router = APIRouter()

class GenerateResourcesRequest(BaseModel):
    role: str
    level: str
    topic: Optional[str] = None

@router.get("/")
async def health():
    return {"status": "study_resources active"}

@router.post("/generate")
async def generate_resources(body: GenerateResourcesRequest):
    """Generate personalized study resource cards."""
    try:
        resources = await generate_study_resources(
            role=body.role,
            level=body.level,
            topic=body.topic
        )
        return {
            "topics": resources,
            "metadata": {
                "role": body.role,
                "level": body.level,
                "topic": body.topic,
                "count": len(resources),
            },
        }
    except Exception as e:
        print(f"DEBUG ERROR STUDY RESOURCES: {e}")
        err_str = str(e).upper()
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            print("FALLBACK: Using mock data for study resources due to quota limit.")
            return {
                "topics": get_mock_study_resources(body.role, body.level, body.topic),
                "is_mock": True
            }
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_study_resources(role: str, level: str, topic: str = None):
    target_topic = topic if topic else f"{role} Fundamentals"
    return [
        {
            "topic": target_topic,
            "tag": "RECOMMENDED FOR YOU",
            "videos": [
                {"title": f"Complete {target_topic} Mastery", "meta": "YouTube · 32m", "url": "https://www.youtube.com/results?search_query=" + target_topic.replace(' ', '+')},
                {"title": f"{target_topic} Crash Course", "meta": "YouTube · 1h 15m", "url": "https://www.youtube.com/results?search_query=" + target_topic.replace(' ', '+') + "+course"}
            ],
            "notes": [
                {"title": f"{target_topic} Official Guide", "meta": "MDN Web Docs", "url": "https://developer.mozilla.org/en-US/search?q=" + target_topic.replace(' ', '+')},
                {"title": f"{target_topic} Cheat Sheet", "meta": "DevHints.io", "url": "https://devhints.io/?q=" + target_topic.replace(' ', '+')}
            ],
            "projects": [
                {"title": f"Build a {target_topic} Dashboard", "meta": "Est. 4h", "url": "https://github.com/search?q=" + target_topic.replace(' ', '+') + "+project"},
                {"title": f"{target_topic} Enterprise Starter", "meta": "Est. 10h", "url": "https://github.com/search?q=" + target_topic.replace(' ', '+') + "+starter"}
            ]
        }
    ]
