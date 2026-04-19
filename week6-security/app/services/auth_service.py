import time
from fastapi import HTTPException
from app.models.user import users_db

failed_attempts = {}
blocked_users = {}

def authenticate(email, password):
    if email in blocked_users and time.time() < blocked_users[email]:
        raise HTTPException(status_code=403, detail="User blocked")

    user = users_db.get(email)

    if not user or user["password"] != password:
        print("⚠️ Invalid login")

        if email not in failed_attempts:
            failed_attempts[email] = []

        failed_attempts[email].append(time.time())

        failed_attempts[email] = [
            t for t in failed_attempts[email]
            if t > time.time() - 600
        ]

        if len(failed_attempts[email]) >= 5:
            blocked_users[email] = time.time() + 600
            print("⚠️ User blocked for 10 mins")

        raise HTTPException(status_code=401, detail="Invalid credentials")

    return user