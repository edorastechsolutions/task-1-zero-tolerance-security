from fastapi import APIRouter, Request
from app.schemas.auth_schema import LoginRequest
from app.services.rate_limiter import rate_limit
from app.services.auth_service import authenticate
from app.core.security import create_token

router = APIRouter()

@router.post("/login")
def login(data: LoginRequest, request: Request):
    ip = request.client.host

    rate_limit(ip)

    user = authenticate(data.email, data.password)

    token = create_token(data.email, user["role"])

    return {"token": token}