# Risk Assessment

| Vulnerability | Severity | Impact | Recommendation |
|--------------|----------|--------|---------------|
| SQL Injection | High | Database compromise | Use prepared statements |
| XSS | Medium | Session theft | Input sanitization |
| IDOR | High | Unauthorized access | Authorization checks |
| Session Hijacking | High | Account takeover | Secure cookies |

---

## Risk Levels

### High Severity
May lead to complete system compromise.

### Medium Severity
May cause data leakage.

### Low Severity
Minimal impact but must be fixed.