from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.ai.gemini_client import generate_mock_interview_questions, evaluate_mock_interview

router = APIRouter()


class EvaluateMockInterviewRequest(BaseModel):
    questions: list[dict]
    answers: dict


@router.get("/")
async def health():
    return {"status": "mock_interview active"}


@router.post("/generate")
async def generate_mock_interview():
    try:
        questions = await generate_mock_interview_questions()
        return {
            "questions": questions,
            "metadata": {
                "count": len(questions),
                "mcqCount": len([q for q in questions if q.get("type") == "mcq"]),
                "textCount": len([q for q in questions if q.get("type") == "text"]),
            },
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/evaluate")
async def evaluate_full_mock_interview(body: EvaluateMockInterviewRequest):
    try:
        mcq_questions = [q for q in body.questions if q.get("type") == "mcq"]
        mcq_total = len(mcq_questions)
        mcq_score = 0

        for q in mcq_questions:
            qid = q.get("id")
            user_answer = body.answers.get(str(qid), body.answers.get(qid))
            if user_answer and str(user_answer).lower() == str(q.get("correctAnswer", "")).lower():
                mcq_score += 1

        evaluation = await evaluate_mock_interview(
            questions=body.questions,
            answers=body.answers,
            mcq_score=mcq_score,
            mcq_total=mcq_total,
        )

        # Ensure score baseline is present even if model omits it.
        evaluation["mcqScore"] = evaluation.get("mcqScore", mcq_score)
        evaluation["mcqTotal"] = evaluation.get("mcqTotal", mcq_total)

        return evaluation
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
