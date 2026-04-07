import User from "../models/User.js";

// middleware to check if User is authenticated
export const protect = async (req, res, next) => {
  try {
    console.log("req.auth:", req.auth)
    console.log("userId:", req.auth?.userId)

    const userId = req.auth?.userId; // ✅ safely access userId

    if (!userId) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return res.json({ success: false, message: "User Not Found" }); // ✅ handle missing user
    }

    req.user = user;
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
