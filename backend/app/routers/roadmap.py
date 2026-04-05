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
        "target_role": target_role,
        "timeline": timeline,
        "summary": f"Your personalized {timeline} roadmap to become a {target_role}. This is a sample roadmap based on the role requirements.",
        "phases": [
            {
                "phase": 1,
                "name": "Foundation & Core Skills",
                "duration": "Month 1-2",
                "focus": "DSA, System Design, Fundamentals",
                "milestones": [
                    {"milestone": "Master Arrays & Linked Lists", "duration": "Week 1-2"},
                    {"milestone": "Learn Trees & Graphs", "duration": "Week 3-4"},
                    {"milestone": "Practice 20+ problems", "duration": "Week 5-8"}
                ],
                "resources": ["LeetCode", "GeeksforGeeks", "YouTube tutorials"],
                "skills": ["Data Structures", "Algorithms", "Problem Solving"]
            },
            {
                "phase": 2,
                "name": "Advanced Concepts & Projects",
                "duration": "Month 3-4",
                "focus": "OOP, Design Patterns, Real-world Applications",
                "milestones": [
                    {"milestone": "Build 2-3 projects", "duration": "Week 9-12"},
                    {"milestone": "Learn design patterns", "duration": "Week 13-14"},
                    {"milestone": "Contribute to open source", "duration": "Week 15-16"}
                ],
                "resources": ["GitHub", "MDN", "Dev communities"],
                "skills": ["OOP Design", "System Architecture", "Collaboration"]
            },
            {
                "phase": 3,
                "name": "Interview Prep & Polishing",
                "duration": "Month 5-6",
                "focus": "Behavioral, Technical, Company-specific",
                "milestones": [
                    {"milestone": "Mock interviews", "duration": "Week 17-18"},
                    {"milestone": "Company research", "duration": "Week 19"},
                    {"milestone": "Final refinement", "duration": "Week 20-24"}
                ],
                "resources": ["Placementor.ai", "Pramp", "Interview questions"],
                "skills": ["Communication", "Interview techniques", "Resume optimization"]
            }
        ],
        "recommendations": [
            "Focus on consistent practice rather than rushing through topics",
            "Build projects that solve real problems",
            "Join communities and network with peers",
            "Take regular mock interviews to build confidence"
        ]
    }
