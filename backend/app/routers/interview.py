"""
Interview router — generate questions and evaluate answers via Gemini.
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

from app.ai.gemini_client import (
    generate_interview_questions,
    evaluate_interview_answers,
)

router = APIRouter()


# ── Request / Response models ──────────────────────────────────────

class GenerateRequest(BaseModel):
    role: str
    experienceLevel: str
    difficulty: str  # "easy" | "medium" | "hard"


class EvaluateRequest(BaseModel):
    questions: list[dict]
    answers: dict
    role: str


# ── Endpoints ──────────────────────────────────────────────────────

@router.get("/")
async def health():
    return {"status": "interview active"}


@router.post("/generate-questions")
async def generate_questions(body: GenerateRequest):
    """Generate 10 AI-powered interview questions (6 MCQ + 4 text)."""
    try:
        questions = await generate_interview_questions(
            role=body.role,
            experience_level=body.experienceLevel,
            difficulty=body.difficulty,
        )
        return {
            "questions": questions,
            "metadata": {
                "role": body.role,
                "experienceLevel": body.experienceLevel,
                "difficulty": body.difficulty,
                "count": len(questions),
            },
        }
    except Exception as e:
        print(f"DEBUG ERROR: {e}")
        err_str = str(e).upper()
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            return {
                "questions": get_mock_interview_questions(),
                "metadata": {
                    "role": body.role,
                    "experienceLevel": body.experienceLevel,
                    "difficulty": body.difficulty,
                    "count": 10,
                },
                "is_mock": True,
            }
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/evaluate-answers")
async def evaluate_answers(body: EvaluateRequest):
    """Evaluate a candidate's answers using Gemini."""
    try:
        results = await evaluate_interview_answers(
            questions=body.questions,
            answers=body.answers,
            role=body.role,
        )
        return results
    except Exception as e:
        print(f"DEBUG ERROR: {e}")
        err_str = str(e).upper()
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            return {
                "overallScore": 74,
                "strengths": ["Good fundamental understanding", "Clear answer structure"],
                "improvements": ["Provide deeper technical examples", "Use measurable impact in explanations"],
                "summary": "Good baseline performance with room for stronger technical depth.",
                "is_mock": True,
            }
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_interview_questions() -> list[dict]:
    return [
        {"id": 1, "type": "mcq", "question": "Which data structure follows LIFO?", "options": {"a": "Queue", "b": "Array", "c": "Stack", "d": "Linked List"}, "answer": "c"},
        {"id": 2, "type": "mcq", "question": "What is the time complexity of hashmap lookup on average?", "options": {"a": "O(log n)", "b": "O(1)", "c": "O(n)", "d": "O(n log n)"}, "answer": "b"},
        {"id": 3, "type": "mcq", "question": "Which HTTP status code indicates unauthorized access?", "options": {"a": "200", "b": "201", "c": "401", "d": "500"}, "answer": "c"},
        {"id": 4, "type": "mcq", "question": "Which SQL clause is used for grouping rows?", "options": {"a": "ORDER BY", "b": "GROUP BY", "c": "WHERE", "d": "LIMIT"}, "answer": "b"},
        {"id": 5, "type": "mcq", "question": "Which React hook is used for side effects?", "options": {"a": "useState", "b": "useMemo", "c": "useEffect", "d": "useCallback"}, "answer": "c"},
        {"id": 6, "type": "mcq", "question": "Which one is a NoSQL database?", "options": {"a": "PostgreSQL", "b": "MySQL", "c": "MongoDB", "d": "SQLite"}, "answer": "c"},
        {"id": 7, "type": "text", "question": "Explain how you would optimize a slow API endpoint."},
        {"id": 8, "type": "text", "question": "Describe your approach to debugging production issues."},
        {"id": 9, "type": "text", "question": "How do you ensure code quality in team projects?"},
        {"id": 10, "type": "text", "question": "What trade-offs do you consider while designing a system?"},
    ]
