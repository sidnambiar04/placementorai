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


def build_mock_evaluation(questions: list[dict], answers: dict) -> dict:
    """Return a frontend-compatible fallback evaluation payload."""
    per_question = []
    mcq_correct = 0
    text_scores = []

    for q in questions:
        qid = q.get("id")
        qtype = q.get("type")
        user_answer = answers.get(str(qid), answers.get(qid, ""))

        if qtype == "mcq":
            correct_answer = str(q.get("correctAnswer", q.get("answer", ""))).lower().strip()
            selected = str(user_answer or "").lower().strip()
            is_correct = bool(selected) and selected == correct_answer
            score = 1 if is_correct else 0
            mcq_correct += score

            per_question.append(
                {
                    "questionId": qid,
                    "score": score,
                    "maxScore": 1,
                    "isCorrect": is_correct,
                    "correctAnswer": correct_answer,
                    "feedback": "Correct." if is_correct else "Review fundamentals and option elimination.",
                }
            )
            continue

        text = str(user_answer or "").strip()
        if not text:
            text_score = 0
            feedback = "No answer submitted."
        elif len(text) < 40:
            text_score = 0.25
            feedback = "Too brief. Add structure, examples, and trade-offs."
        elif len(text) < 100:
            text_score = 0.5
            feedback = "Good start. Add more depth and concrete outcomes."
        elif len(text) < 180:
            text_score = 0.75
            feedback = "Strong answer. Add one quantified result to make it sharper."
        else:
            text_score = 1
            feedback = "Well-structured and detailed response."

        text_scores.append(text_score)
        per_question.append(
            {
                "questionId": qid,
                "score": text_score,
                "maxScore": 1,
                "isCorrect": text_score == 1,
                "feedback": feedback,
            }
        )

    total_possible = max(1, len(questions))
    overall_score = round(mcq_correct + sum(text_scores), 2)
    percentage = round((overall_score / total_possible) * 100)

    avg_text_score = (sum(text_scores) / len(text_scores)) if text_scores else 0
    if avg_text_score >= 0.85:
        english_proficiency = "Excellent"
    elif avg_text_score >= 0.65:
        english_proficiency = "Good"
    elif avg_text_score >= 0.4:
        english_proficiency = "Average"
    else:
        english_proficiency = "Needs Improvement"

    return {
        "overallScore": overall_score,
        "totalPossible": total_possible,
        "percentage": percentage,
        "englishProficiency": english_proficiency,
        "englishFeedback": "Fallback evaluation used due to temporary AI limits.",
        "perQuestion": per_question,
        "strengths": ["Consistent attempt across sections", "Clear intent in responses"],
        "improvements": ["Add more technical depth", "Use concise STAR-style communication"],
        "summary": "Fallback scoring generated to keep interview flow uninterrupted.",
        "is_mock": True,
    }


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

        # Keep response schema stable for frontend rendering.
        if not isinstance(results, dict) or not isinstance(results.get("perQuestion"), list):
            fallback = build_mock_evaluation(body.questions, body.answers)
            if not isinstance(results, dict):
                return fallback

            results["perQuestion"] = fallback["perQuestion"]
            results["overallScore"] = results.get("overallScore", fallback["overallScore"])
            results["totalPossible"] = results.get("totalPossible", fallback["totalPossible"])
            results["percentage"] = results.get("percentage", fallback["percentage"])
            results["englishProficiency"] = results.get("englishProficiency", fallback["englishProficiency"])
            results["englishFeedback"] = results.get("englishFeedback", fallback["englishFeedback"])

        return results
    except Exception as e:
        print(f"DEBUG ERROR: {e}")
        err_str = str(e).upper()
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            return build_mock_evaluation(body.questions, body.answers)
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_interview_questions() -> list[dict]:
    return [
        {"id": 1, "type": "mcq", "question": "Which data structure follows LIFO?", "options": {"a": "Queue", "b": "Array", "c": "Stack", "d": "Linked List"}, "correctAnswer": "c"},
        {"id": 2, "type": "mcq", "question": "What is the time complexity of hashmap lookup on average?", "options": {"a": "O(log n)", "b": "O(1)", "c": "O(n)", "d": "O(n log n)"}, "correctAnswer": "b"},
        {"id": 3, "type": "mcq", "question": "Which HTTP status code indicates unauthorized access?", "options": {"a": "200", "b": "201", "c": "401", "d": "500"}, "correctAnswer": "c"},
        {"id": 4, "type": "mcq", "question": "Which SQL clause is used for grouping rows?", "options": {"a": "ORDER BY", "b": "GROUP BY", "c": "WHERE", "d": "LIMIT"}, "correctAnswer": "b"},
        {"id": 5, "type": "mcq", "question": "Which React hook is used for side effects?", "options": {"a": "useState", "b": "useMemo", "c": "useEffect", "d": "useCallback"}, "correctAnswer": "c"},
        {"id": 6, "type": "mcq", "question": "Which one is a NoSQL database?", "options": {"a": "PostgreSQL", "b": "MySQL", "c": "MongoDB", "d": "SQLite"}, "correctAnswer": "c"},
        {"id": 7, "type": "text", "question": "Explain how you would optimize a slow API endpoint."},
        {"id": 8, "type": "text", "question": "Describe your approach to debugging production issues."},
        {"id": 9, "type": "text", "question": "How do you ensure code quality in team projects?"},
        {"id": 10, "type": "text", "question": "What trade-offs do you consider while designing a system?"},
    ]
