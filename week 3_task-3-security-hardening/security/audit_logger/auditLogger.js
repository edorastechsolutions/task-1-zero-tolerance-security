module.exports = function logEvent(event,severity,req){

    const log = {
        timestamp:new Date().toISOString(),
        requestId:req?.requestId || "unknown",
        event,
        severity
    };

    console.log(JSON.stringify(log));
};