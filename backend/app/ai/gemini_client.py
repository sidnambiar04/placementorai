"""
Gemini AI client — wraps the Google GenAI SDK for the Placementor backend.
"""
import json
import re
from google import genai
from app.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)
MODEL = "gemini-2.0-flash"

SAFETY_SETTINGS = [
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"},
]


def _extract_json(text: str):
    """Pull the first valid JSON array or object out of a Gemini response.

    Uses raw_decode so it stops after the first complete JSON value and
    ignores any trailing text / markdown that Gemini sometimes appends,
    which would cause 'Extra data' errors with plain json.loads().
    """
    # 1. Strip markdown fences first
    fenced = re.search(r"```(?:json)?\s*([\s\S]*?)```", text)
    if fenced:
        text = fenced.group(1).strip()

    decoder = json.JSONDecoder()

    # 2. Find the first [ or { and try raw_decode from there
    for pattern in [r"\{", r"\["]:
        m = re.search(pattern, text)
        if m:
            try:
                obj, _ = decoder.raw_decode(text, m.start())
                # If it's a list, look for the first dictionary inside (Gemini fallback)
                if isinstance(obj, list):
                    for item in obj:
                        if isinstance(item, dict):
                            return json.dumps(item)
                return json.dumps(obj)
            except json.JSONDecodeError:
                continue

    print(f"CRITICAL: Failed to extract JSON from raw text: {text[:500]}...")
    return text.strip()


async def generate_interview_questions(
    role: str,
    experience_level: str,
    difficulty: str,
    count: int = 10,
) -> list[dict]:
    """Ask Gemini to produce `count` interview questions."""
    from app.ai.prompts.interview_prompt import build_generate_prompt

    prompt = build_generate_prompt(role, experience_level, difficulty, count)
    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "safety_settings": SAFETY_SETTINGS,
        }
    )
    raw = _extract_json(response.text)
    parsed = json.loads(raw)
    if not isinstance(parsed, list):
        raise ValueError("Expected a JSON array of questions")
    return parsed[:count]


async def evaluate_interview_answers(
    questions: list[dict],
    answers: dict,
    role: str,
) -> dict:
    """Ask Gemini to evaluate a candidate's answers."""
    from app.ai.prompts.interview_prompt import build_evaluate_prompt

    prompt = build_evaluate_prompt(questions, answers, role)
    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "safety_settings": SAFETY_SETTINGS,
        }
    )

    raw = _extract_json(response.text)
    print(f"DEBUG RAW EVAL (first 300 chars): {raw[:300]}")

    parsed = json.loads(raw)

    # The AI sometimes returns the result wrapped in a list — unwrap it
    if isinstance(parsed, list):
        for item in parsed:
            if isinstance(item, dict) and "overallScore" in item:
                parsed = item
                break
        else:
            if len(parsed) == 1 and isinstance(parsed[0], dict):
                parsed = parsed[0]

    if not isinstance(parsed, dict):
        raise ValueError(f"Expected a JSON object for evaluation, got {type(parsed).__name__}")

    return parsed


async def generate_study_resources(role: str, level: str, topic: str = None) -> list[dict]:
    """Ask Gemini to generate personalized study resources based on role, level, and topic."""
    from app.ai.prompts.study_prompt import build_study_resources_prompt

    prompt = build_study_resources_prompt(role, level, topic)
    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "safety_settings": SAFETY_SETTINGS,
        }
    )

    raw = _extract_json(response.text)
    print(f"DEBUG RAW STUDY RESOURCES (first 300 chars): {raw[:300]}")

    parsed = json.loads(raw)

    if not isinstance(parsed, dict) or "topics" not in parsed:
        raise ValueError(f"Expected a JSON object with 'topics' key for study resources, got {type(parsed).__name__}")

    return parsed["topics"]


async def generate_mock_interview_questions() -> list[dict]:
    """Generate exactly 10 placement mock interview questions (6 MCQ + 4 text)."""
    from app.ai.prompts.mock_interview_prompt import build_mock_interview_generation_prompt

    response = client.models.generate_content(
        model=MODEL,
        contents=build_mock_interview_generation_prompt(),
        config={
            "response_mime_type": "application/json",
            "safety_settings": SAFETY_SETTINGS,
        }
    )
    raw = _extract_json(response.text)
    parsed = json.loads(raw)

    if not isinstance(parsed, list):
        raise ValueError("Expected a JSON array for mock interview questions")

    return parsed[:10]


async def evaluate_mock_interview(
    questions: list[dict],
    answers: dict,
    mcq_score: int,
    mcq_total: int,
) -> dict:
    """Evaluate written answers and provide full interview feedback."""
    from app.ai.prompts.mock_interview_prompt import build_mock_interview_evaluation_prompt

    prompt = build_mock_interview_evaluation_prompt(
        questions=questions,
        answers=answers,
        mcq_score=mcq_score,
        mcq_total=mcq_total,
    )
    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "safety_settings": SAFETY_SETTINGS,
        }
    )

    raw = _extract_json(response.text)
    parsed = json.loads(raw)

    if not isinstance(parsed, dict):
        raise ValueError("Expected a JSON object for mock interview evaluation")

    return parsed


async def generate_career_roadmap(
    current_role: str,
    target_role: str,
    skills: str,
    timeline: str,
    weak_areas: str = "",
) -> dict:
    """Generate a structured career roadmap with phases and milestones."""
    from app.ai.prompts.career_roadmap_prompt import build_career_roadmap_prompt

    prompt = build_career_roadmap_prompt(
        current_role=current_role,
        target_role=target_role,
        skills=skills,
        timeline=timeline,
        weak_areas=weak_areas,
    )
    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "safety_settings": SAFETY_SETTINGS,
        }
    )

    raw = _extract_json(response.text)
    parsed = json.loads(raw)
    if not isinstance(parsed, dict):
        raise ValueError("Expected a JSON object for career roadmap")
    return parsed
