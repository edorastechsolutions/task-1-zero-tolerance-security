from fastapi import FastAPI
from app.routes import auth, admin
from app.middleware.security_headers import add_security_headers

app = FastAPI()

app.include_router(auth.router)
app.include_router(admin.router)

app.middleware("http")(add_security_headers)