from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, resume, interview, evaluation, skill_gap, roadmap, dashboard, study_resources, recommendations

app = FastAPI(title="Placement Companion API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Update for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(resume.router, prefix="/api/v1/resume", tags=["resume"])
app.include_router(interview.router, prefix="/api/v1/interview", tags=["interview"])
app.include_router(evaluation.router, prefix="/api/v1/evaluation", tags=["evaluation"])
app.include_router(skill_gap.router, prefix="/api/v1/skill_gap", tags=["skill_gap"])
app.include_router(roadmap.router, prefix="/api/v1/roadmap", tags=["roadmap"])
app.include_router(dashboard.router, prefix="/api/v1/dashboard", tags=["dashboard"])
app.include_router(study_resources.router, prefix="/api/v1/study-resources", tags=["study_resources"])
app.include_router(recommendations.router, prefix="/api", tags=["recommendations"])

@app.get("/health")
async def health_check():
    return {"status": "ok"}
