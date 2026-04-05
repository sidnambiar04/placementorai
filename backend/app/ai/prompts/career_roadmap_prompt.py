"""
Prompt templates for AI career roadmap generation.
"""

def build_career_roadmap_prompt(
    current_role: str,
    target_role: str,
    skills: str,
    timeline: str,
    weak_areas: str = "",
) -> str:
    extra_focus = f"\n- Weak areas to focus on: {weak_areas}" if weak_areas.strip() else ""

    return f"""You are an expert career coach and technical recruiter. Generate a highly specific, actionable career roadmap.

CANDIDATE PROFILE:
- Current role/background: {current_role}
- Target role: {target_role}
- Current skills: {skills}
- Timeline: {timeline}{extra_focus}

CRITICAL INSTRUCTIONS:
1. This roadmap MUST be specifically tailored for someone targeting "{target_role}".
2. Do NOT give generic advice. Every phase, goal, resource, and milestone must be directly relevant to "{target_role}".
3. Identify the EXACT skills, tools, languages, and frameworks required for "{target_role}" and build the roadmap around them.
4. Resources must be real, specific links (YouTube channels, courses, documentation, platforms) relevant to "{target_role}".
5. Consider the candidate's current skills ({skills}) and only include learning items they actually need — skip what they already know.
6. Timeline is {timeline} — distribute phases proportionally across this timeline.

EXAMPLES of role-specific thinking:
- If target is "Backend Developer": focus on Node.js/Python/Java, databases, REST APIs, system design, Docker
- If target is "Data Scientist": focus on Python, pandas, scikit-learn, ML algorithms, statistics, Jupyter, Kaggle
- If target is "Frontend Developer": focus on React/Vue, CSS, JavaScript, responsive design, performance optimization
- If target is "DevOps Engineer": focus on Linux, Docker, Kubernetes, CI/CD, AWS/GCP, monitoring
- If target is "ML Engineer": focus on PyTorch/TensorFlow, model deployment, MLOps, cloud platforms
- Apply this same specificity to whatever role is given.

Return ONLY a JSON object in exactly this schema (no markdown, no explanation):
{{
  "phases": [
    {{
      "title": "Specific phase title relevant to {target_role}",
      "duration": "e.g., Weeks 1-3",
      "goals": [
        "Specific, actionable goal 1 for {target_role}",
        "Specific, actionable goal 2 for {target_role}",
        "Specific, actionable goal 3 for {target_role}"
      ],
      "resources": [
        {{"title": "Specific resource name", "url": "https://actual-url.com"}},
        {{"title": "Specific resource name 2", "url": "https://actual-url-2.com"}}
      ],
      "milestones": [
        "Concrete, measurable milestone 1",
        "Concrete, measurable milestone 2"
      ]
    }}
  ],
  "summary": "2-3 sentence summary specifically about the path from {current_role} to {target_role} in {timeline}",
  "tips": [
    "Specific tip relevant to landing a {target_role} job",
    "Specific tip about the {target_role} hiring process",
    "Specific tip about skills or portfolio for {target_role}"
  ]
}}

Requirements:
- Exactly 4 to 6 phases, sequenced logically for {timeline}
- Each phase builds on the previous one
- Goals must mention specific technologies/skills for {target_role}
- Resources must be real websites (LeetCode, Coursera, official docs, YouTube channels etc.)
- Milestones must be measurable (e.g., "Build and deploy a REST API", not just "learn backend")
"""