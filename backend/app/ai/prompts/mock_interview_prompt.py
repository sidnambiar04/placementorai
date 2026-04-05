"""
Prompt templates for placement-oriented mock interview generation and evaluation.
"""
import json


def build_mock_interview_generation_prompt() -> str:
    return """Generate a placement mock interview with exactly 10 questions.

STRICT REQUIREMENTS:
- Questions 1 to 6 must be MCQ questions focused on placement aptitude, logical reasoning, and technical fundamentals.
- Each MCQ must have exactly 4 options: a, b, c, d.
- Each MCQ must include one correct answer key as: \"correctAnswer\".
- Questions 7 to 10 must be open-ended English proficiency writing questions.
- Keep all questions relevant to college placement preparation.

Return ONLY a valid JSON array with this exact schema (no markdown, no extra text):
[
  {
    "id": 1,
    "type": "mcq",
    "question": "...",
    "topic": "Aptitude",
    "options": {
      "a": "...",
      "b": "...",
      "c": "...",
      "d": "..."
    },
    "correctAnswer": "a"
  },
  {
    "id": 7,
    "type": "text",
    "question": "...",
    "topic": "English"
  }
]

Output must contain exactly 10 items with unique id values from 1 to 10.
"""


def build_mock_interview_evaluation_prompt(
    questions: list[dict],
    answers: dict,
    mcq_score: int,
    mcq_total: int,
) -> str:
    payload = {
        "questions": questions,
        "answers": answers,
        "mcqScore": mcq_score,
        "mcqTotal": mcq_total,
    }
    return f"""Evaluate this completed placement mock interview.

Input JSON:
{json.dumps(payload, indent=2)}

RULES:
- MCQ scoring is already computed: mcqScore out of mcqTotal.
- Evaluate only the 4 written answers deeply for grammar, clarity, relevance, and professionalism.
- Each written answer must get a score between 0 and 10.
- Provide concise, constructive feedback.

Return ONLY one JSON object with this exact schema:
{{
  "mcqScore": {mcq_score},
  "mcqTotal": {mcq_total},
  "englishScore": <number 0-10, can be decimal>,
  "englishTotal": 10,
  "totalScore": <number 0-100>,
  "sectionBreakdown": {{
    "mcqPercentage": <number 0-100>,
    "englishPercentage": <number 0-100>
  }},
  "writtenFeedback": [
    {{
      "questionId": <number>,
      "score": <number 0-10>,
      "feedback": "<brief feedback>"
    }}
  ],
  "strengths": ["...", "..."],
  "improvements": ["...", "..."],
  "overallSummary": "<2-3 sentences>"
}}

Ensure writtenFeedback has one entry for each written question in the interview.
"""
