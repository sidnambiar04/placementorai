from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import datetime
from app.firebase.client import verify_token, get_db

router = APIRouter()

class LoginRequest(BaseModel):
    idToken: str

@router.post("/login")
async def login_user(request: LoginRequest):
    token = request.idToken
    if not token:
        raise HTTPException(status_code=400, detail="Token is required")

    # Verify token using Firebase Admin
    try:
        decoded_token = verify_token(token)
        if not decoded_token:
            # Admin SDK not initialized
            raise HTTPException(status_code=503, detail="Backend Firebase Service Account is not configured. Server cannot verify token or write to DB. Please follow the terminal instructions.")
    except Exception as e:
        if isinstance(e, HTTPException):
            raise e
        raise HTTPException(status_code=401, detail=f"Invalid authentication token: {str(e)}")
        
    uid = decoded_token.get("uid")
    email = decoded_token.get("email", "")
    name = decoded_token.get("name", "")
    
    # Save/Sync with Database
    db = get_db()
    is_new_user = False
    
    if db:
        try:
            user_ref = db.collection("users").document(uid)
            doc = user_ref.get()
            if not doc.exists:
                is_new_user = True
                user_ref.set({
                    "name": name,
                    "email": email,
                    "createdAt": datetime.utcnow().isoformat(),
                    "auth_source": "firebase",
                })
        except Exception as e:
            print(f"Error saving user to Firestore via Admin SDK: {e}")
            raise HTTPException(status_code=500, detail="Failed to save user data to database.")
    
    return {
        "status": "success",
        "message": "Authentication successful",
        "isNewUser": is_new_user,
        "user": {
            "uid": uid,
            "name": name,
            "email": email
        }
    }
