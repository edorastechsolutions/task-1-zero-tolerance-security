module.exports = (err,req,res,next)=>{
    console.error(err);
    res.status(403).send("Request denied");
};