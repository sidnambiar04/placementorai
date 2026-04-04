def build_study_resources_prompt(skills: list[str], level: str) -> str:
    skills_str = ", ".join(skills) if skills else "General programming fundamentals"
    return f"""You are an expert study resource curator for any technical or non-technical domain.
Generate personalized study resource cards for a {level}-level learner.

Topics/Skills to cover: {skills_str}

Return a JSON array of exactly {len(skills) if len(skills) <= 6 else 4} resource cards — one per skill if 6 or fewer, otherwise pick the 4 most important.

Return ONLY a valid JSON array, no markdown, no extra text:
[
  {{
    "skill": "<exact skill/topic name>",
    "priority": "RECOMMENDED FOR YOU",
    "difficulty": "{level}",
    "isMissing": true,
    "iconBg": "#FFF4EC",
    "iconText": "<2-3 letter abbreviation>",
    "videos": [
      "<Specific YouTube tutorial title by a known creator e.g. Traversy Media, Fireship, CS50>",
      "<Specific YouTube course/playlist title>",
      "<Another video title>"
    ],
    "notes": [
      "<Specific documentation/article name e.g. MDN Web Docs: Array Methods, freeCodeCamp: Python Guide>",
      "<GeeksforGeeks / official docs article title>",
      "<freeCodeCamp tutorial or blog post title>"
    ],
    "practice": [
      "<Specific LeetCode problem or HackerRank challenge title>",
      "<Mini project idea e.g. Build a Todo App with React>",
      "<Coding exercise or kata on CodePen/GitHub>"
    ]
  }}
]

Rules:
- Accept ANY domain topic: web dev, machine learning, DSA, databases, cloud, mobile, design, finance, etc.
- Use REAL resource names that actually exist on YouTube/freeCodeCamp/LeetCode
- Keep all titles concise and specific (not generic like "Watch YouTube videos")
- Return ONLY the JSON array, absolutely nothing else before or after it.
"""
