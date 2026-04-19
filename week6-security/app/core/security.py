import jwt
from datetime import datetime, timedelta
from fastapi import HTTPException

SECRET_KEY = "mysecretkey"

def create_token(email, role):
    payload = {
        "email": email,
        "role": role,
        "exp": datetime.utcnow() + timedelta(hours=1)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")

def verify_token(token: str):
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
    except:
        raise HTTPException(status_code=401, detail="Invalid token")