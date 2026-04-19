from fastapi import APIRouter, Depends, HTTPException
from app.core.security import verify_token

router = APIRouter()

def admin_required(payload=Depends(verify_token)):
    if payload["role"] != "ADMIN":
        raise HTTPException(status_code=403, detail="Admin only")
    return payload

@router.get("/admin")
def admin_route(payload=Depends(admin_required)):
    return {"message": "Welcome Admin"}