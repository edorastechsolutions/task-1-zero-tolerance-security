const express = require("express");
const app = express();
const logger = require("./logger");

const requestIdMiddleware = require("./middleware/requestId");
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(requestIdMiddleware);

// Request logging
app.use((req, res, next) => {
  logger.info({
    level: "INFO",
    requestId: req.requestId,
    method: req.method,
    url: req.url,
    message: "Incoming request"
  });
  next();
});

app.use("/auth", authRoutes);

// Error handling
app.use((err, req, res, next) => {
  logger.error({
    level: "ERROR",
    requestId: req.requestId,
    message: err.message
  });

  res.status(500).send("Something went wrong");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});