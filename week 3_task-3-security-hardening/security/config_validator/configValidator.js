module.exports = function validateConfig() {

    if(!process.env.JWT_SECRET){
        console.error("Missing JWT_SECRET");
        process.exit(1); // FAIL CLOSED
    }

    if(!process.env.RATE_LIMIT_MAX){
        console.error("Missing RATE_LIMIT_MAX");
        process.exit(1);
    }
};