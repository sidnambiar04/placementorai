from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_test_roadmap():
    return {"status": "roadmap active"}
