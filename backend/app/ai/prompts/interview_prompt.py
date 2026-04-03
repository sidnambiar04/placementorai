"""
Prompt templates for mock-interview question generation and evaluation.
"""
import json


def build_generate_prompt(
    role: str,
    experience_level: str,
    difficulty: str,
    count: int = 10,
) -> str:
    return f"""You are an expert technical interviewer for "{role}" positions.
The candidate has "{experience_level}" level experience.
Generate exactly {count} interview questions at "{difficulty}" difficulty level.

STRICT REQUIREMENTS:
- Questions 1-6 MUST be multiple-choice (type "mcq") with exactly 4 options (keys "a","b","c","d") and one correct answer.
- Questions 7-{count} MUST be open-ended written-answer questions (type "text") specifically designed to also evaluate the candidate's English communication skills.
- All questions must be relevant to the "{role}" position.

Difficulty guide:
- easy   → fundamental concepts, basic definitions, straightforward recall
- medium → applied knowledge, problem-solving, scenario-based reasoning
- hard   → system design, edge-case analysis, deep expertise, optimisation

Return ONLY a valid JSON array (no extra text, no markdown) with exactly {count} objects.
Each object schema:
{{
  "id": <number 1-{count}>,
  "type": "mcq" | "text",
  "question": "<question text>",
  "topic": "<1-3 word topic label>",
  "options": {{"a":"...","b":"...","c":"...","d":"..."}},   // ONLY for mcq
  "correctAnswer": "a"|"b"|"c"|"d"                          // ONLY for mcq
}}

For type "text" omit "options" and "correctAnswer".
"""


def build_evaluate_prompt(
    questions: list[dict],
    answers: dict,
    role: str,
) -> str:
    qa_pairs = []
    for q in questions:
        qid = q["id"]
        # Try both int and string keys for the answer
        user_answer = answers.get(str(qid), answers.get(qid, "(no answer)"))
        entry = {
            "id": qid,
            "type": q["type"],
            "question": q["question"],
            "userAnswer": user_answer,
        }
        if q["type"] == "mcq":
            entry["options"] = q.get("options")
            entry["correctAnswer"] = q.get("correctAnswer")
        qa_pairs.append(entry)

    return f"""You are an expert interviewer evaluating a candidate's performance for a "{role}" position.

Below are the 10 questions (6 MCQ + 4 written) and the candidate's answers.
{json.dumps(qa_pairs, indent=2)}

EVALUATION RULES:
- For MCQ (type "mcq"): score 1 if userAnswer matches correctAnswer, else 0. maxScore = 1.
- For Written (type "text"): score on a scale of 0 to 1 (allow 0, 0.25, 0.5, 0.75, 1) based on correctness, depth, and relevance. maxScore = 1.
- For the 4 written answers, also assess the candidate's English proficiency (grammar, vocabulary, clarity, articulation).

CRITICAL: You MUST return a single JSON object (NOT an array, NOT wrapped in []). The response must be exactly one JSON object with curly braces at the top level.

Return this exact JSON object schema:
{{
  "overallScore": <number — sum of all scores>,
  "totalPossible": 10,
  "percentage": <number 0-100 rounded to nearest integer>,
  "englishProficiency": "Excellent" | "Good" | "Average" | "Needs Improvement",
  "englishFeedback": "<1-2 sentence overall assessment of English communication>",
  "perQuestion": [
    {{
      "questionId": <number>,
      "score": <number>,
      "maxScore": 1,
      "isCorrect": <boolean — true if full marks>,
      "correctAnswer": "<option key>",
      "feedback": "<1-2 sentence feedback>"
    }}
  ]
}}
For MCQ include "correctAnswer" (the option key). For text omit "correctAnswer".
"""

