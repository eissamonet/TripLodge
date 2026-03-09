import User from '../models/User.js';

// middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    try {
        const userId = req.auth?.userId || req.auth;
        if (!userId) {
            return res.json({ success: false, message: 'not authenticated' });
        } else {
            const user = await User.findById(userId);
            req.user = user;
            next();
        }
    } catch (err) {
        next(err);
    }
}