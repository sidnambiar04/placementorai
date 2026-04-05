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


def _is_quota_error(err_str: str) -> bool:
    """Check if error is a Gemini quota/rate limit error."""
    return any(x in err_str for x in ["429", "RESOURCE_EXHAUSTED", "quota", "QUOTA"])


def _extract_json(text: str):
    """Pull the first valid JSON array or object out of a Gemini response."""
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
                if isinstance(obj, list):
                    for item in obj:
                        if isinstance(item, dict):
                            return json.dumps(item)
                return json.dumps(obj)
            except json.JSONDecodeError:
                continue

    print(f"CRITICAL: Failed to extract JSON from raw text: {text[:500]}...")
    return text.strip()


# ── MOCK FALLBACKS ──────────────────────────────────────────────────────────

def get_mock_career_roadmap() -> dict:
    return {
        "is_mock": True,
        "summary": "This is a sample roadmap shown because the AI quota was reached. Generate again later for a fully personalized roadmap.",
        "phases": [
            {
                "title": "Foundation & Core Concepts",
                "duration": "Weeks 1–4",
                "goals": [
                    "Understand fundamentals of your target domain",
                    "Set up development environment",
                    "Learn core programming concepts"
                ],
                "resources": [
                    {"title": "FreeCodeCamp", "url": "https://freecodecamp.org"},
                    {"title": "MDN Web Docs", "url": "https://developer.mozilla.org"}
                ],
                "milestones": ["Complete 2 beginner projects", "Understand core concepts"]
            },
            {
                "title": "Skill Building & Practice",
                "duration": "Weeks 5–10",
                "goals": [
                    "Practice DSA problems daily",
                    "Build 2 portfolio projects",
                    "Learn relevant frameworks/tools"
                ],
                "resources": [
                    {"title": "LeetCode", "url": "https://leetcode.com"},
                    {"title": "GeeksforGeeks", "url": "https://geeksforgeeks.org"}
                ],
                "milestones": ["Solve 50 DSA problems", "Deploy one project live"]
            },
            {
                "title": "Interview Preparation",
                "duration": "Weeks 11–16",
                "goals": [
                    "Practice mock interviews",
                    "Refine resume and portfolio",
                    "Apply to target companies"
                ],
                "resources": [
                    {"title": "Pramp - Mock Interviews", "url": "https://pramp.com"},
                    {"title": "InterviewBit", "url": "https://interviewbit.com"}
                ],
                "milestones": ["Complete 10 mock interviews", "Apply to 20 companies"]
            }
        ],
        "tips": [
            "Stay consistent — 2 hours daily beats 10 hours on weekends.",
            "Build real projects, not just tutorials.",
            "Network on LinkedIn and attend tech meetups.",
            "Track your progress weekly and adjust your plan."
        ]
    }


def get_mock_interview_questions() -> list:
    return [
        {
            "id": 1,
            "type": "mcq",
            "question": "What does OOP stand for?",
            "options": ["Object Oriented Programming", "Open Object Protocol", "Ordered Output Processing", "None of the above"],
            "correct_answer": "Object Oriented Programming"
        },
        {
            "id": 2,
            "type": "mcq",
            "question": "Which data structure uses LIFO?",
            "options": ["Queue", "Stack", "Array", "Linked List"],
            "correct_answer": "Stack"
        },
        {
            "id": 3,
            "type": "mcq",
            "question": "What is the time complexity of binary search?",
            "options": ["O(n)", "O(n²)", "O(log n)", "O(1)"],
            "correct_answer": "O(log n)"
        },
        {
            "id": 4,
            "type": "mcq",
            "question": "Which HTTP method is used to retrieve data?",
            "options": ["POST", "PUT", "GET", "DELETE"],
            "correct_answer": "GET"
        },
        {
            "id": 5,
            "type": "mcq",
            "question": "What does SQL stand for?",
            "options": ["Structured Query Language", "Simple Query Logic", "System Query Layer", "Standard Query List"],
            "correct_answer": "Structured Query Language"
        },
        {
            "id": 6,
            "type": "mcq",
            "question": "Which of these is NOT a programming paradigm?",
            "options": ["Functional", "Declarative", "Compiled", "Object-Oriented"],
            "correct_answer": "Compiled"
        },
        {
            "id": 7,
            "type": "text",
            "question": "Explain the difference between a stack and a queue with a real-world example."
        },
        {
            "id": 8,
            "type": "text",
            "question": "What is the difference between REST and GraphQL APIs?"
        },
        {
            "id": 9,
            "type": "text",
            "question": "Describe a challenging project you worked on and how you overcame obstacles."
        },
        {
            "id": 10,
            "type": "text",
            "question": "Where do you see yourself in 5 years, and how does this role align with your goals?"
        }
    ]


# ── GEMINI FUNCTIONS ────────────────────────────────────────────────────────

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
        raise ValueError(f"Expected a JSON object with 'topics' key, got {type(parsed).__name__}")

    return parsed["topics"]


async def generate_mock_interview_questions() -> list[dict]:
    """Generate exactly 10 placement mock interview questions (6 MCQ + 4 text)."""
    from app.ai.prompts.mock_interview_prompt import build_mock_interview_generation_prompt

    try:
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

    except Exception as e:
        err_str = str(e)
        if _is_quota_error(err_str):
            print("FALLBACK: Using mock questions due to quota limit.")
            return get_mock_interview_questions()
        raise


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

    try:
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

    except Exception as e:
        err_str = str(e)
        if _is_quota_error(err_str):
            print("FALLBACK: Using mock roadmap due to quota limit.")
            return get_mock_career_roadmap()
        raise