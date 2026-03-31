from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_test_evaluation():
    return {"status": "evaluation active"}
