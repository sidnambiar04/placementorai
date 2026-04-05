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
        print(f"ERROR generate_roadmap: {e}")
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            print("FALLBACK: Using mock data for roadmap due to quota limit.")
            return {"roadmap": get_mock_career_roadmap(body.targetRole, body.timeline), "is_mock": True}
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_career_roadmap(target_role: str, timeline: str):
    return {
        "summary": f"Your personalized {timeline} roadmap to become a {target_role}. Focus on consistent practice and building real-world projects.",
        "phases": [
            {
                "title": "Foundation & Core Skills",
                "duration": f"{timeline} - Phase 1",
                "goals": [
                    "Master fundamental data structures and algorithms",
                    "Build strong problem-solving skills",
                    "Learn system design basics"
                ],
                "resources": [
                    {"title": "LeetCode", "url": "https://leetcode.com"},
                    {"title": "GeeksforGeeks DSA", "url": "https://www.geeksforgeeks.org/data-structures/"},
                    {"title": "YouTube DSA Playlist", "url": "https://www.youtube.com/results?search_query=dsa+tutorial"}
                ],
                "milestones": [
                    "Complete 30+ DSA problems",
                    "Understand Time & Space complexity",
                    "Build first portfolio project"
                ]
            },
            {
                "title": "Advanced Concepts & Projects",
                "duration": f"{timeline} - Phase 2",
                "goals": [
                    "Master advanced algorithm patterns",
                    "Build 2-3 production-ready projects",
                    "Learn system design patterns"
                ],
                "resources": [
                    {"title": "System Design Primer", "url": "https://github.com/donnemartin/system-design-primer"},
                    {"title": "GitHub Awesome Lists", "url": "https://github.com/topics/awesome"},
                    {"title": "Design Patterns Course", "url": "https://www.coursera.org"}
                ],
                "milestones": [
                    "Complete system design questions",
                    "Push 2-3 projects to GitHub",
                    "Write technical blog posts"
                ]
            },
            {
                "title": "Interview Preparation & Polish",
                "duration": f"{timeline} - Phase 3",
                "goals": [
                    "Master behavioral interview techniques",
                    "Practice mock technical interviews",
                    "Polish resume and online presence"
                ],
                "resources": [
                    {"title": "Placementor.ai Mock Interviews", "url": "https://placementor.ai"},
                    {"title": "Pramp", "url": "https://www.pramp.com"},
                    {"title": "Interview Prep Guides", "url": "https://www.exponent.com"}
                ],
                "milestones": [
                    "Complete 10+ mock interviews",
                    "Finalize resume",
                    "Research target companies"
                ]
            }
        ],
        "tips": [
            "Consistency is key - practice daily, even if just 30 minutes",
            "Build projects that solve real problems",
            "Document your learning in a blog or GitHub",
            "Network with peers and join development communities",
            "Focus on understanding concepts, not just memorizing"
        ]
    }
