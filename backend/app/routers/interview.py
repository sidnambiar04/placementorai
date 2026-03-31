from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_test_interview():
    return {"status": "interview active"}
