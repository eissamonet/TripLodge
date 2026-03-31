import User from '../models/User.js';

// middleware to check if User is authenticated
export const protect = async (req, res, next) => {
    const {userId} = req.auth;
    if(!userId){
        res.json({success: false, message: "Not Authorized"})
    }else{
        const user = await User.findOne({ clerkId: userId });
        req.user = user;
        next();
    }
}