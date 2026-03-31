from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_test_dashboard():
    return {"status": "dashboard active"}
