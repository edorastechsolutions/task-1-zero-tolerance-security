# Failure Handling Strategy – Login

The system follows a fail-closed model.

## Invalid Input
Rejected immediately with generic error.

## Incorrect Credentials
Return: "Invalid credentials."
Log the attempt securely.

## Expired or Invalid Token
Session invalidated and access denied.

## Backend Failure
Login denied with generic error message.
No fallback access allowed.

## Unexpected Errors
Generic error shown to user.
Detailed logs stored internally.
