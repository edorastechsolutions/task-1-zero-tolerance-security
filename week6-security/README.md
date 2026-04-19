# Week 6 - Backend Security Hardening

## Features Implemented

- Rate Limiting (5 requests / 10 min)
- Login Protection (block after 5 failed attempts)
- RBAC (USER, ADMIN)
- JWT Authentication
- Input Validation (Pydantic)
- Security Headers
- Logging

## Run Project

```bash
uvicorn app.main:app --reload