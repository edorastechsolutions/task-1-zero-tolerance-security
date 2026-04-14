const express = require("express");
const router = express.Router();
const logger = require("../logger");

let failedAttempts = {};

// LOGIN API
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const ip = req.ip;

  if (!failedAttempts[username]) {
    failedAttempts[username] = 0;
  }

  // Dummy login check
  if (password === "1234") {
    failedAttempts[username] = 0;

    logger.info({
      level: "INFO",
      requestId: req.requestId,
      user: username,
      message: "Login successful"
    });

    return res.send("Login Success");
  } else {
    failedAttempts[username]++;

    logger.warn({
      level: "WARN",
      requestId: req.requestId,
      user: username,
      message: "Login failed",
      attempts: failedAttempts[username]
    });

    // ALERT CONDITION
    if (failedAttempts[username] >= 5) {
      logger.error({
        level: "ERROR",
        requestId: req.requestId,
        user: username,
        message: "ALERT: Multiple failed logins",
        ip: ip
      });

      return res.status(403).send("Account temporarily blocked");
    }

    return res.status(401).send("Invalid credentials");
  }
});

module.exports = router;