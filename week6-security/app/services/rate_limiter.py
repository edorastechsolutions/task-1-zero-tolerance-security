import time
from fastapi import HTTPException

rate_limit_store = {}

def rate_limit(ip, limit=5, window=600):
    now = time.time()

    if ip not in rate_limit_store:
        rate_limit_store[ip] = []

    rate_limit_store[ip] = [t for t in rate_limit_store[ip] if t > now - window]

    if len(rate_limit_store[ip]) >= limit:
        print("⚠️ Rate limit exceeded")
        raise HTTPException(status_code=429, detail="Too many requests")

    rate_limit_store[ip].append(now)