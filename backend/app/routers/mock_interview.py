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
        err_str = str(e).upper()
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            print("FALLBACK: Using mock interview questions due to quota limit.")
            questions = get_mock_interview_questions()
            return {
                "questions": questions,
                "metadata": {
                    "count": len(questions),
                    "mcqCount": len([q for q in questions if q.get("type") == "mcq"]),
                    "textCount": len([q for q in questions if q.get("type") == "text"]),
                },
                "is_mock": True,
            }
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
        err_str = str(e).upper()
        if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str or "QUOTA" in err_str:
            print("FALLBACK: Using mock interview evaluation due to quota limit.")
            return get_mock_interview_evaluation(mcq_score=mcq_score, mcq_total=mcq_total)
        raise HTTPException(status_code=500, detail=str(e))


def get_mock_interview_questions() -> list[dict]:
    return [
        {"id": 1, "type": "mcq", "question": "Which data structure provides FIFO behavior?", "options": {"a": "Stack", "b": "Queue", "c": "Tree", "d": "Graph"}, "correctAnswer": "b"},
        {"id": 2, "type": "mcq", "question": "What is the average time complexity of binary search?", "options": {"a": "O(n)", "b": "O(log n)", "c": "O(n log n)", "d": "O(1)"}, "correctAnswer": "b"},
        {"id": 3, "type": "mcq", "question": "Which protocol is stateless?", "options": {"a": "HTTP", "b": "FTP", "c": "SMTP", "d": "SSH"}, "correctAnswer": "a"},
        {"id": 4, "type": "mcq", "question": "What is used to uniquely identify a record in SQL?", "options": {"a": "Foreign Key", "b": "Primary Key", "c": "Index", "d": "View"}, "correctAnswer": "b"},
        {"id": 5, "type": "mcq", "question": "Which hook manages local state in React?", "options": {"a": "useMemo", "b": "useEffect", "c": "useState", "d": "useRef"}, "correctAnswer": "c"},
        {"id": 6, "type": "mcq", "question": "Which HTTP method is generally idempotent?", "options": {"a": "POST", "b": "PATCH", "c": "GET", "d": "CONNECT"}, "correctAnswer": "c"},
        {"id": 7, "type": "text", "question": "Explain a project where you improved performance. What was the bottleneck and result?"},
        {"id": 8, "type": "text", "question": "How would you design an API for a simple task manager application?"},
        {"id": 9, "type": "text", "question": "Describe a bug you faced recently and how you diagnosed it."},
        {"id": 10, "type": "text", "question": "How do you prioritize learning when preparing for placements?"},
    ]


def get_mock_interview_evaluation(mcq_score: int, mcq_total: int) -> dict:
    english_score = 78
    technical_score = 74
    total_score = round((english_score + technical_score + ((mcq_score / mcq_total) * 100 if mcq_total else 0)) / 3)
    return {
        "totalScore": total_score,
        "mcqScore": mcq_score,
        "mcqTotal": mcq_total,
        "englishScore": english_score,
        "technicalScore": technical_score,
        "strengths": ["Good structure in long-form answers", "Solid fundamentals in core CS topics"],
        "improvements": ["Add more quantified project outcomes", "Practice concise STAR-format communication"],
        "summary": "Strong potential. Continue weekly mock practice and tighten answer clarity.",
        "is_mock": True,
    }
