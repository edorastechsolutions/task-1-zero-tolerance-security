const jwt = require("jsonwebtoken")

function authenticate(req, res, next) {
  const auth = req.headers.authorization
  if (!auth || typeof auth !== "string") {
    return res.status(401).json({ message: "unauthorized" })
  }
  const parts = auth.split(" ")
  if (parts.length !== 2) {
    return res.status(401).json({ message: "unauthorized" })
  }
  const token = parts[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "secret")
    req.user = payload
    next()
  } catch (e) {
    return res.status(401).json({ message: "unauthorized" })
  }
}

module.exports = authenticate