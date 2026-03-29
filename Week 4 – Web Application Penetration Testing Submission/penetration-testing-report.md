# Full Web Application Penetration Testing Report

## Objective
To simulate a real-world penetration testing engagement by identifying and exploiting vulnerabilities in a web application.

---

## Methodology

### 1. Reconnaissance
The web application was analyzed to identify potential attack surfaces such as login forms, input fields, and URL parameters.

---

### 2. SQL Injection Testing
Payload Used:
' OR 1=1--

Result:
Authentication bypass was successfully achieved, proving lack of input validation.

Blind SQL Injection Payload:
' AND SUBSTRING(database(),1,1)='d'--

This confirmed database information extraction capability.

---

### 3. Cross-Site Scripting (XSS)

Reflected XSS Payload:
<script>alert('XSS')</script>

Stored XSS was executed by inserting malicious scripts into persistent input fields.

Impact:
Attackers can execute malicious scripts in user browsers.

---

### 4. Session Hijacking
Session cookies were captured after login and reused to simulate unauthorized access.

Impact:
Attackers can access accounts without credentials.

---

### 5. Insecure Direct Object Reference (IDOR)

Example:
/profile?id=102 → /profile?id=101

Unauthorized user data access was achieved.

---

### 6. Request Interception and Manipulation
Using Burp Suite, HTTP requests were intercepted, modified, and replayed.

Result:
Application trusted manipulated parameters.

---

### 7. Automated Vulnerability Scanning
OWASP ZAP identified:
- Security misconfigurations
- Vulnerable endpoints
- Input validation issues

---

### 8. Server Misconfiguration Testing
Nikto scanning revealed:
- Default files exposure
- Outdated configurations
- Directory listing risks