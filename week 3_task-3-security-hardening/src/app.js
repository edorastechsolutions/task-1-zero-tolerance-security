const express = require('express');

const requestTracing = require('./security/request_tracing/requestTracing');
const securityHeaders = require('./security/security_headers/securityHeaders');
const rateLimiter = require('./security/rate_limiter/rateLimiter');
const bruteForce = require('./security/brute_force_protection/bruteForce');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json());

app.use(requestTracing);
app.use(securityHeaders);
app.use(rateLimiter);

app.post("/login", bruteForce, (req,res)=>{
    res.json({message:"Login endpoint"});
});

app.get("/test",(req,res)=>{
    res.json({success:true});
});

app.use(errorHandler);

module.exports = app;