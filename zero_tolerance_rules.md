# Zero-Tolerance Security Rules – Login

1. Access is denied by default unless authentication succeeds.
2. All communication must use HTTPS (TLS).
3. Passwords are stored only as salted cryptographic hashes.
4. Invalid input is rejected before processing.
5. Error messages never reveal whether email or password was incorrect.
6. Rate limiting is enforced on login attempts.
7. Multi-factor authentication is enforced where enabled.
8. Session tokens are securely generated and time-limited.
9. Internal errors are never exposed to users.
