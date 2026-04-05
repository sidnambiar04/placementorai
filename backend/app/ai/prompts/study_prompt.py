def build_study_resources_prompt(role: str, level: str, topic: str = None) -> str:
    return f"""You are an expert study resource curator. 
The user is a {level}-level {role}.
{f"They specifically want to learn about: {topic}." if topic else "Recommend the 3 most important topics they should study now to advance their career."}

Return a JSON object (no markdown, no backticks) in exactly this structure:
{{
  "topics": [
    {{
      "topic": "Topic Name",
      "tag": "RECOMMENDED FOR YOU",
      "videos": [
        {{"title": "Specific Accurate Title 1", "meta": "Channel · Duration", "url": "https://www.youtube.com/results?search_query=topic+tutorial+1"}},
        {{"title": "Highly Relevant Guide 2", "meta": "Channel · Duration", "url": "https://www.youtube.com/results?search_query=topic+deep+dive"}}
      ],
      "notes": [
        {{"title": "Official Technical Doc 1", "meta": "Source e.g. MDN", "url": "https://developer.mozilla.org/..."}},
        {{"title": "In-depth Deep Dive 2", "meta": "Source Guide", "url": "https://www.freecodecamp.org/..."}}
      ],
      "projects": [
        {{"title": "Real-world Project 1", "meta": "Est. 5h", "url": "https://github.com/search?q=topic+projects"}},
        {{"title": "Architecture Starter 2", "meta": "Est. 12h", "url": "https://github.com/search?q=topic+starter+kit"}}
      ]
    }}
  ]
}}

{f"Return exactly 1 topic (the requested topic)." if topic else "Return exactly 3 highly accurate topics."}
IMPORTANT: For each topic, you MUST provide exactly 2 videos, 2 notes, and 2 projects.
Content MUST be strictly relevant for a {level}-level {role} on the topic "{topic}". Avoid generic titles.

Rules:
- Provide REAL, high-quality resource names.
- Provide direct, functional URLs to the actual resource or a highly specific search results page.
- Tags should be one of: "RECOMMENDED FOR YOU", "HIGH PRIORITY", "BEGINNER FRIENDLY", "SKILL GAP".
- Return ONLY the JSON object, absolutely nothing else.
"""
