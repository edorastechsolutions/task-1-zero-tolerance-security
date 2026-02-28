    const express = require("express")
const { validateUser } = require("./security/input_validator")
const authenticate = require("./security/auth_middleware")
const authorize = require("./security/authorization")
const errorHandler = require("./security/error_handler")
const protectedRoute = require("./routes/protected_route")

const app = express()
app.use(express.json())

app.post("/api/data", validateUser, authenticate, authorize(["ADMIN", "USER"]), protectedRoute)

app.use(errorHandler)

module.exports = app