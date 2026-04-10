import User from "../models/User.js";

// middleware to check if User is authenticated
export const protect = async (req, res, next) => {
  try {
    console.log("=== PROTECT MIDDLEWARE ===")
    console.log("req.auth:", req.auth)
    console.log("userId:", req.auth().userId)

    const userId = req.auth().userId;

    if (!userId) {
      console.log("❌ No userId found in req.auth")
      return res.json({ success: false, message: "Not Authorized" });
    }

    const user = await User.findOne({ clerkId: userId });
    console.log("Mongo user:", user);

    if (!user) {
      console.log("❌ No user found in DB for id:", userId)
      return res.json({ success: false, message: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("❌ Error:", error.message)
    res.json({ success: false, message: error.message });
  }
};
