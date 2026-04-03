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
        raise HTTPException(status_code=500, detail=str(e))
