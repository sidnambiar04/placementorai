"""
Prompt builder for skill gap analysis using Gemini AI.
"""

def build_skill_gap_prompt(name: str, dream_role: str, experience_level: str,
                           past_experience: str = "", previous_analysis: dict = None) -> str:
    analysis_ctx = ""
    if previous_analysis:
        ats = previous_analysis.get("atsScore", "N/A")
        killers = previous_analysis.get("atsKillers", [])
        kw_gap = previous_analysis.get("keywordGap", {}).get("important", [])
        analysis_ctx = f"""
Resume Analysis Context:
- ATS Score: {ats}/100
- Key Issues: {', '.join(killers[:3]) if killers else 'None'}
- Missing Keywords: {', '.join(kw_gap[:5]) if kw_gap else 'None'}
"""

    exp_section = f"\nPast Experience: {past_experience}" if past_experience.strip() else ""
    
    return f"""You are an expert career coach and skill gap analyst specializing in tech placements.

Candidate: {name}
Target Role: {dream_role}
Experience Level: {experience_level}{exp_section}{analysis_ctx}

Perform a comprehensive skill gap analysis and create a personalized learning roadmap.

Respond ONLY with a valid JSON object (no markdown fences) with this structure:
{{
  "role": "{dream_role}",
  "level": "{experience_level}",
  "summary": "<2-3 sentence overview>",
  "atsScore": <integer 0-100 based on current profile>,
  "skillMatch": <integer 0-100>,
  "readiness": "<High|Medium|Low>",
  "topCompanies": ["Google", "Microsoft", "Amazon", "Meta", "Apple"],
  "skillsHave": ["<skill1>", "<skill2>"],
  "skillsMissing": ["<skill1>", "<skill2>"],
  "roadmap": [
    {{
      "rank": 1,
      "name": "<milestone title>",
      "desc": "<what to focus on>",
      "priority": "<High|Medium|Low>"
    }}
  ],
  "categories": [
    {{
      "name": "<Category Name>",
      "pct": <integer 0-100>,
      "icon": "<emoji>",
      "sub": "<short description>",
      "level": "<high|mid|low>"
    }}
  ],
  "insights": [
    {{
      "title": "<insight title>",
      "desc": "<actionable advice>"
    }}
  ],
  "weakAreas": [
    {{
      "icon": "⚠️",
      "title": "<weakness title>",
      "desc": "<how to fix it>"
    }}
  ]
}}

Make the roadmap realistic for a {experience_level} targeting {dream_role}. Be specific and actionable.
"""


def build_company_recommendations_prompt(role: str, skills: list, experience: str,
                                          resume_context: dict = None) -> str:
    skills_str = ", ".join(skills[:10]) if skills else "General Programming"
    resume_ctx = ""
    if resume_context:
        ats = resume_context.get("atsScore", "N/A")
        resume_ctx = f"\nResume ATS Score: {ats}/100. Missing keywords: {', '.join(resume_context.get('keywordGap', {}).get('important', [])[:4])}"

    return f"""You are a job market expert and placement counselor with deep knowledge of the tech industry.

Candidate Profile:
- Target Role: {role}
- Skills: {skills_str}
- Experience Level: {experience}{resume_ctx}

Recommend 8 companies that are the best match for this candidate right now.

Respond ONLY with a JSON array (no markdown), each item:
{{
  "company": "<Company Name>",
  "role": "<Specific Role Title> • <Work Mode e.g. Remote/Hybrid>",
  "vacancies": <integer estimated openings>,
  "matchScore": <integer 70-99>,
  "matchedSkills": ["<skill1>", "<skill2>", "<skill3>"],
  "missingSkills": ["<skill1>"],
  "reason": "<2-3 sentences on why this company is a strong fit for the candidate>",
  "applicationUrl": "<best real URL to apply or their careers page>"
}}

Include a mix of:
- 2-3 top-tier product companies (Google, Microsoft, etc.) if appropriate for experience level
- 3-4 mid-tier tech companies or startups
- 1-2 service-based companies as safe options
Sort by matchScore descending. Make it realistic for the experience level.
"""
