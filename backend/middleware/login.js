const jwt = require('jsonwebtoken');
require('dotenv').config();

const fetchUser = async(req,res, next)=>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).json({
            message: 'Access Denied'
        });
    }
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user_data;
        next();
    }catch(err){
        return res.status(400).json({
            message: 'Invalid Token'
        });
    }
}

module.exports = fetchUser;