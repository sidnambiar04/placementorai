from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_test_skill_gap():
    return {"status": "skill_gap active"}
