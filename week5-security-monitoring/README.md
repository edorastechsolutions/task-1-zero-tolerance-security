# Week 5 - Security Monitoring

## Features Implemented

### 1. Structured Logging
- JSON logs using Winston
- Includes requestId, user, endpoint

### 2. Authentication Logging
- Login success
- Login failure
- Account lock

### 3. Suspicious Detection
- 5 failed login attempts triggers alert

### 4. Alert System
- Logs ALERT when suspicious activity detected

### 5. Request Tracking
- Unique requestId for each request

### 6. Secure Error Handling
- No internal error exposed

### 7. Log Levels
- INFO
- WARN
- ERROR

### 8. Sensitive Data Protection
- No passwords logged

### 9. Incident Response Flow
Detection → Logging → Alert → Block user