import User from "../models/User.js";

// middleware to check if User is authenticated
export const protect = async (req, res, next) => {
  try {

    const userId = req.auth?.userId;

    if (!userId) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
