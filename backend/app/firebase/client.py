import firebase_admin
from firebase_admin import credentials, firestore, auth
import os
import json

_initialized = False

def init_firebase():
    global _initialized
    if _initialized:
        return

    try:
        # First try environment variable (for Render deployment)
        creds_json = os.environ.get("FIREBASE_CREDENTIALS")
        
        if creds_json:
            # Running on Render - read from env variable
            creds_dict = json.loads(creds_json)
            cred = credentials.Certificate(creds_dict)
            firebase_admin.initialize_app(cred)
            _initialized = True
            print("Firebase initialized from environment variable.")
            return

        # Fallback to file path (for local development)
        cred_path = os.environ.get("FIREBASE_CREDENTIALS_PATH")
        
        if cred_path and os.path.exists(cred_path):
            cred = credentials.Certificate(cred_path)
            firebase_admin.initialize_app(cred)
            _initialized = True
            print("Firebase initialized from credentials file.")
            return

        # Neither worked
        print("================================================================")
        print("WARNING: Firebase credentials not found.")
        print("Set FIREBASE_CREDENTIALS (JSON string) for production")
        print("or FIREBASE_CREDENTIALS_PATH for local development")
        print("================================================================")

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

# Initialize on load
init_firebase()