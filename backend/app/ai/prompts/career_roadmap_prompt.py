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
    extra_focus = f"Weak areas or focus areas: {weak_areas}." if weak_areas else ""
    return f"""Generate a detailed, structured career roadmap.

Candidate context:
- Current role/domain: {current_role}
- Target role: {target_role}
- Current skills: {skills}
- Timeline goal: {timeline}
{extra_focus}

Return ONLY JSON in this exact schema (no markdown):
{{
  "phases": [
    {{
      "title": "Phase title",
      "duration": "e.g., Weeks 1-4",
      "goals": ["...", "..."],
      "resources": [
        {{"title": "...", "url": "https://..."}},
        {{"title": "...", "url": "https://..."}}
      ],
      "milestones": ["...", "..."]
    }}
  ],
  "summary": "<2-3 sentence summary>",
  "tips": ["...", "..."]
}}

Requirements:
- 3 to 4 phases total.
- Each phase must be practical and sequenced for the given timeline.
- Include at most 1 resource link per phase.
- Keep summary concise (max 2 sentences).
"""
