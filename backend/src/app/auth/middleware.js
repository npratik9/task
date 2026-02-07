const jwt = require('jsonwebtoken')


const loginChecker=(req, res, next)=>{
    try{
    let token = req.headers["authorization"] ?? null
    if(!token){
        return res.status(401).json({
            message:"token not found"
        })
    }

    token= token.replace("Bearer ", "")

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

    req.user= decodedToken;
    next()

    } catch(exception){
        return res.status(401).json({
            message:"Invalid or failed token"
        })
    }
}

module.exports= loginChecker;