from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_test_auth():
    return {"status": "auth active"}
