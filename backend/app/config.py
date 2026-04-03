from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "Placement Companion API"
    CORS_ORIGINS: List[str] = ["http://localhost:5173", "http://localhost:3000"]
    GEMINI_API_KEY: str = ""
    FIREBASE_CREDENTIALS_PATH: str = ""

    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()
