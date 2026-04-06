"""
Gemini AI client with quota resilience and caching.
"""
import hashlib
import json
import os
import re
import time
from google import genai
from app.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)
MODEL = "gemini-1.5-flash"

# Resilience controls (override via deployment env vars).
AI_CACHE_ENABLED = os.getenv("AI_CACHE_ENABLED", "true").lower() == "true"
AI_CACHE_TTL_SECONDS = int(os.getenv("AI_CACHE_TTL_SECONDS", "21600"))
AI_QUOTA_COOLDOWN_SECONDS = int(os.getenv("AI_QUOTA_COOLDOWN_SECONDS", "900"))

_CACHE: dict[str, dict] = {}
_QUOTA_BLOCK_UNTIL: dict[str, float] = {}

SAFETY_SETTINGS = [
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"},
]


def _stable_json(value) -> str:
    return json.dumps(value, ensure_ascii=True, sort_keys=True, separators=(",", ":"), default=str)


def _cache_key(feature: str, payload) -> str:
    raw = f"{feature}:{_stable_json(payload)}"
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()


def get_cached_result(feature: str, payload):
    if not AI_CACHE_ENABLED:
        return None
    key = _cache_key(feature, payload)
    row = _CACHE.get(key)
    if not row:
        return None
    if row["expires_at"] <= time.time():
        _CACHE.pop(key, None)
        return None
    return row["value"]


def set_cached_result(feature: str, payload, value, ttl_seconds: int | None = None):
    if not AI_CACHE_ENABLED:
        return
    ttl = ttl_seconds if ttl_seconds is not None else AI_CACHE_TTL_SECONDS
    key = _cache_key(feature, payload)
    _CACHE[key] = {
        "value": value,
        "expires_at": time.time() + max(60, int(ttl)),
    }


def _is_quota_error(err: Exception) -> bool:
    err_str = str(err).upper()
    return (
        "429" in err_str
        or "RESOURCE_EXHAUSTED" in err_str
        or "QUOTA" in err_str
        or "RATE_LIMIT" in err_str
    )


def _quota_block_seconds_remaining(feature: str) -> int:
    until = _QUOTA_BLOCK_UNTIL.get(feature, 0)
    remaining = int(until - time.time())
    return max(0, remaining)


def is_quota_blocked(feature: str) -> bool:
    return _quota_block_seconds_remaining(feature) > 0


def call_gemini(
    contents,
    *,
    feature: str,
    response_mime_type: str | None = "application/json",
    extra_config: dict | None = None,
):
    if is_quota_blocked(feature):
        wait = _quota_block_seconds_remaining(feature)
        raise RuntimeError(f"QUOTA_COOLDOWN_ACTIVE:{feature}:{wait}")

    config = {"safety_settings": SAFETY_SETTINGS}
    if response_mime_type:
        config["response_mime_type"] = response_mime_type
    if extra_config:
        config.update(extra_config)

    try:
        return client.models.generate_content(
            model=MODEL,
            contents=contents,
            config=config,
        )
    except Exception as e:
        if _is_quota_error(e):
            _QUOTA_BLOCK_UNTIL[feature] = time.time() + AI_QUOTA_COOLDOWN_SECONDS
        raise


def _extract_json(text: str):
    """Pull the first valid JSON array or object out of a Gemini response."""
    fenced = re.search(r"```(?:json)?\s*([\s\S]*?)```", text)
    if fenced:
        text = fenced.group(1).strip()

    decoder = json.JSONDecoder()

    for pattern in [r"\{", r"\["]:
        m = re.search(pattern, text)
        if m:
            try:
                obj, _ = decoder.raw_decode(text, m.start())
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
    """Ask Gemini to produce interview questions."""
    from app.ai.prompts.interview_prompt import build_generate_prompt

    payload = {
        "role": role,
        "experience_level": experience_level,
        "difficulty": difficulty,
        "count": count,
    }
    cached = get_cached_result("interview_generate", payload)
    if cached is not None:
        return cached

    prompt = build_generate_prompt(role, experience_level, difficulty, count)
    response = call_gemini(prompt, feature="interview_generate")
    raw = _extract_json(response.text)
    parsed = json.loads(raw)
    if not isinstance(parsed, list):
        raise ValueError("Expected a JSON array of questions")

    result = parsed[:count]
    set_cached_result("interview_generate", payload, result, ttl_seconds=1800)
    return result


async def evaluate_interview_answers(
    questions: list[dict],
    answers: dict,
    role: str,
) -> dict:
    """Ask Gemini to evaluate interview answers."""
    from app.ai.prompts.interview_prompt import build_evaluate_prompt

    prompt = build_evaluate_prompt(questions, answers, role)
    response = call_gemini(prompt, feature="interview_evaluate")

    raw = _extract_json(response.text)
    parsed = json.loads(raw)

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
    """Ask Gemini to generate personalized study resources."""
    from app.ai.prompts.study_prompt import build_study_resources_prompt

    payload = {"role": role, "level": level, "topic": topic}
    cached = get_cached_result("study_resources", payload)
    if cached is not None:
        return cached

    prompt = build_study_resources_prompt(role, level, topic)
    response = call_gemini(prompt, feature="study_resources")

    raw = _extract_json(response.text)
    parsed = json.loads(raw)

    if not isinstance(parsed, dict) or "topics" not in parsed:
        raise ValueError(f"Expected a JSON object with 'topics' key for study resources, got {type(parsed).__name__}")

    result = parsed["topics"]
    set_cached_result("study_resources", payload, result, ttl_seconds=21600)
    return result


async def generate_mock_interview_questions() -> list[dict]:
    """Generate exactly 10 placement mock interview questions."""
    from app.ai.prompts.mock_interview_prompt import build_mock_interview_generation_prompt

    cached = get_cached_result("mock_interview_generate", {"v": 1})
    if cached is not None:
        return cached

    response = call_gemini(
        build_mock_interview_generation_prompt(),
        feature="mock_interview_generate",
    )
    raw = _extract_json(response.text)
    parsed = json.loads(raw)

    if not isinstance(parsed, list):
        raise ValueError("Expected a JSON array for mock interview questions")

    result = parsed[:10]
    set_cached_result("mock_interview_generate", {"v": 1}, result, ttl_seconds=1800)
    return result


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
    response = call_gemini(prompt, feature="mock_interview_evaluate")

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

    payload = {
        "current_role": current_role,
        "target_role": target_role,
        "skills": skills,
        "timeline": timeline,
        "weak_areas": weak_areas,
    }
    cached = get_cached_result("career_roadmap", payload)
    if cached is not None:
        return cached

    prompt = build_career_roadmap_prompt(
        current_role=current_role,
        target_role=target_role,
        skills=skills,
        timeline=timeline,
        weak_areas=weak_areas,
    )
    response = call_gemini(prompt, feature="career_roadmap")

    raw = _extract_json(response.text)
    parsed = json.loads(raw)
    if not isinstance(parsed, dict):
        raise ValueError("Expected a JSON object for career roadmap")

    set_cached_result("career_roadmap", payload, parsed, ttl_seconds=43200)
    return parsed
