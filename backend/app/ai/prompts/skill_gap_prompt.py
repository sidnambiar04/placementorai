"""
Prompt builder for skill gap analysis using Gemini AI.
"""

def build_skill_gap_prompt(name: str, dream_role: str, experience_level: str,
                           past_experience: str = "", known_skills: list = None,
                           previous_analysis: dict = None) -> str:
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
    skills_section = ""
    if known_skills:
        skills_section = f"\nKnown Skills: {', '.join(known_skills)}"
        skills_section += "\n\nIMPORTANT: The 'skillsHave' array MUST only contain skills from the Known Skills list above. The 'skillsMissing' array must reflect skills required for the target role that are NOT in the known skills list."

    return f"""You are an expert career coach and skill gap analyst specializing in tech placements.

Candidate: {name}
Target Role: {dream_role}
Experience Level: {experience_level}{exp_section}{skills_section}{analysis_ctx}

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

Recommend EXACTLY 8 real companies that are currently hiring for this type of role. Include a strong mix of global tech giants (Google, Microsoft, Amazon) and major local/regional companies (e.g., Razorpay, Zomato, Flipkart if in India, or relevant local startups). Sort by matchScore descending so the best match is first.

Respond ONLY with a JSON array (no markdown), each item:
{{
  "company": "<Real Company Name>",
  "role": "<Specific Role Title> • <Work Mode e.g. Remote/Hybrid/On-site>",
  "vacancies": <integer estimated openings>,
  "matchScore": <integer 70-99>,
  "salaryRange": "<e.g. $80k - $120k or Rs 8L - Rs 18L>",
  "requiredSkills": ["<skill1>", "<skill2>", "<skill3>", "<skill4>"],
  "matchedSkills": ["<skill1>", "<skill2>"],
  "missingSkills": ["<skill1>"],
  "reason": "<2 sentences on why this company is a strong fit>",
  "applicationUrl": "<real working careers page URL e.g. https://careers.google.com>"
}}

PRIORITY: Give high priority to local/regional high-growth companies and startups (e.g., CRED, Zerodha, Meesho, Razorpay, Swiggy, Zomato, Groww). Limit global MNCs (like Google, Microsoft, Amazon) to at most 20-30% of the total list. Focus on companies with real hiring presence in regional tech hubs (Bangalore, Gurgaon, Noida, Pune, etc.). Sort by priority (Local first) and then by matchScore descending. Provide exactly 8 recommendations. Use ONLY real careers page URLs.
"""
