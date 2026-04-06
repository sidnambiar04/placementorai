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
1. Tailor every phase to the target role.
2. Avoid generic advice.
3. Focus only on skills the candidate still needs.
4. Use real, practical resource links relevant to the role.
5. Sequence the plan realistically for the given timeline.

Return ONLY a JSON object in exactly this schema (no markdown, no explanation):
{{
  "phases": [
    {{
      "title": "Specific phase title relevant to {target_role}",
      "duration": "e.g., Weeks 1-3",
      "goals": [
        "Specific actionable goal 1",
        "Specific actionable goal 2"
      ],
      "resources": [
        {{"title": "Specific resource name", "url": "https://actual-url.com"}}
      ],
      "milestones": [
        "Concrete measurable milestone 1",
        "Concrete measurable milestone 2"
      ]
    }}
  ],
  "summary": "Max 2 sentence summary about the path from {current_role} to {target_role} in {timeline}",
  "tips": [
    "Specific tip relevant to landing a {target_role} job",
    "Specific tip for interview and portfolio"
  ]
}}

Requirements:
- 3 to 4 phases total.
- Each phase must be practical and sequenced for the timeline.
- Include at most 1 resource link per phase.
- Keep summary concise (max 2 sentences).
"""
