"""
Gemini AI client — wraps the Google GenAI SDK for the Placementor backend.
"""
import json
import re
from google import genai
from app.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)
MODEL = "gemini-flash-latest"

SAFETY_SETTINGS = [
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"},
]


def _extract_json(text: str):
    """Pull the first JSON array or object out of a response that may be
    wrapped in markdown fences or explanatory prose."""
    m = re.search(r"```(?:json)?\s*([\s\S]*?)```", text)
    if m:
        return m.group(1).strip()
    m = re.search(r"\[[\s\S]*\]", text)
    if m:
        return m.group(0)
    m = re.search(r"\{[\s\S]*\}", text)
    if m:
        return m.group(0)
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
    parsed = json.loads(response.text)
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

    raw = response.text
    print(f"DEBUG RAW EVAL (first 300 chars): {raw[:300]}")

    parsed = json.loads(raw)

    # The AI sometimes returns the result wrapped in a list — unwrap it
    if isinstance(parsed, list):
        # Find the first dict in the list
        for item in parsed:
            if isinstance(item, dict) and "overallScore" in item:
                parsed = item
                break
        else:
            # If the list contains a single dict, use it
            if len(parsed) == 1 and isinstance(parsed[0], dict):
                parsed = parsed[0]

    if not isinstance(parsed, dict):
        raise ValueError(f"Expected a JSON object for evaluation, got {type(parsed).__name__}")

    return parsed
