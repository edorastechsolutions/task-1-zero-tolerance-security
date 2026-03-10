const logEvent = require('../audit_logger/auditLogger');

const attempts = {};

const MAX_FAIL = 5;
const LOCK_TIME = 2 * 60 * 1000;

module.exports = (req,res,next)=>{

    try{
        const user = req.body.username || "unknown";
        const now = Date.now();

        if(!attempts[user]){
            attempts[user] = {count:0,lockUntil:0};
        }

        if(attempts[user].lockUntil > now){
            logEvent("ACCOUNT_LOCKED","WARN",req);
            return res.status(401).send("Invalid credentials");
        }

        attempts[user].count++;

        if(attempts[user].count >= MAX_FAIL){
            attempts[user].lockUntil = now + LOCK_TIME;
            logEvent("ACCOUNT_LOCKOUT","CRITICAL",req);
        }

        next();
    }
    catch(e){
        return res.status(403).send("Access denied");
    }
};