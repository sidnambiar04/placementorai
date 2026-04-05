"""
Prompt builder for resume analysis using Gemini AI.
"""

def build_resume_analysis_prompt(resume_text: str, target_role: str, job_description: str = "") -> str:
    jd_section = f"\n\nJob Description provided:\n{job_description}" if job_description.strip() else ""
    return f"""You are an expert ATS resume analyzer and career coach. Analyze the following resume for the target role: {target_role}.{jd_section}

Resume Content:
{resume_text}

Respond with a single JSON object (no markdown) with this exact structure:
{{
  "atsScore": <integer 0-100>,
  "potential": "<HIGH|MEDIUM|LOW>",
  "confidence": "<HIGH|MEDIUM|LOW>",
  "metrics": {{
    "keywords": <integer 0-100>,
    "format": <integer 0-100>,
    "completeness": <integer 0-100>,
    "role": <integer 0-100>,
    "impact": <integer 0-100>
  }},
  "atsKillers": ["<issue 1>", "<issue 2>", "<issue 3>"],
  "recruiterReality": "<one honest sentence about how a recruiter sees this resume>",
  "keywordGap": {{
    "important": ["<keyword1>", "<keyword2>", "<keyword3>"],
    "nice_to_have": ["<keyword1>", "<keyword2>"]
  }},
  "optimizedBullets": [
    // Provide 3 to 4 high-impact fixes (IMPORTANT)
    {{
      "severity": "<HIGH|MEDIUM|LOW>",
      "label": "<section name>",
      "original": "<original bullet text>",
      "optimized": "<improved bullet text>",
      "improvements": ["<reason 1>", "<reason 2>"]
    }}
  ],
  "finalVerdict": {{
    "status": "<STRONG|NEEDS WORK|WEAK>",
    "fixTime": "<e.g. 2 hours>",
    "points": [
      {{"type": "green", "text": "<positive point>"}},
      {{"type": "yellow", "text": "<improvement point>"}},
      {{"type": "red", "text": "<critical issue>"}}
    ]
  }}
}}

Be specific, honest and actionable. Base scoring on real ATS criteria.
"""


def build_resume_optimize_prompt(resume_text: str, target_role: str, analysis: dict) -> str:
    return f"""You are a professional resume writer. Rewrite the following resume to maximize ATS compatibility for the role: {target_role}.

Original Resume:
{resume_text}

Analysis insights: The resume scored {analysis.get('atsScore', 'N/A')}/100 ATS score. 
Key issues: {', '.join(analysis.get('atsKillers', [])[:3])}
Missing keywords: {', '.join(analysis.get('keywordGap', {}).get('important', [])[:5])}

Rewrite the resume to:
1. Incorporate all important missing keywords naturally
2. Fix ATS killer issues  
3. Use strong action verbs and quantified impact
4. Keep the same structure but significantly improve each bullet point
5. Ensure clean formatting without special characters that break ATS

Return ONLY the plain text of the improved resume, ready to be formatted as a document.
"""
