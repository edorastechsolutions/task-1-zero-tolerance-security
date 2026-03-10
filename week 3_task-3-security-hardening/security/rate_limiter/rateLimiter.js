const logEvent = require('../audit_logger/auditLogger');

const requests = {};

const MAX = process.env.RATE_LIMIT_MAX || 10;
const WINDOW = 60000;

module.exports = (req,res,next)=>{

    try{
        const ip = req.ip;
        const now = Date.now();

        if(!requests[ip]){
            requests[ip] = [];
        }

        requests[ip] =
            requests[ip].filter(t => now - t < WINDOW);

        requests[ip].push(now);

        if(requests[ip].length > MAX){
            logEvent("RATE_LIMIT_VIOLATION","WARN",req);
            return res.status(429).send("Too many requests");
        }

        next();
    }
    catch(e){
        return res.status(403).send("Access denied");
    }
};