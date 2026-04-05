import firebase_admin
from firebase_admin import credentials, firestore, auth
import os
from app.config import settings

_initialized = False

def init_firebase():
    global _initialized
    if _initialized:
        return

    cred_path = settings.FIREBASE_CREDENTIALS_PATH
    
    if not cred_path or not os.path.exists(cred_path):
        print("================================================================")
        print(f"WARNING: Firebase credentials not found at '{cred_path}'.")
        print("Backend Firebase Admin SDK is NOT initialized.")
        print("Please download your Service Account JSON from Firebase Console")
        print("and set FIREBASE_CREDENTIALS_PATH in your backend/.env file.")
        print("================================================================")
        return

    try:
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred)
        _initialized = True
        print("Successfully initialized Firebase Admin SDK.")
    except Exception as e:
        print(f"Failed to initialize Firebase Admin SDK: {e}")

def get_db():
    if not _initialized:
        init_firebase()
    if _initialized:
        return firestore.client()
    return None

def verify_token(token: str):
    if not _initialized:
        init_firebase()
    if _initialized:
        return auth.verify_id_token(token)
    return None

# Attempt to initialize on load
init_firebase()
