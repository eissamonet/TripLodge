import User from "../models/User.js";

// middleware to check if User is authenticated
export const protect = async (req, res, next) => {
  try {
    console.log("=== PROTECT MIDDLEWARE ===")
    console.log("req.auth:", req.auth)
    const userId = req.auth().userId;
    console.log("userId:", userId)

    if (!userId) {
      console.log("❌ No userId found in req.auth")
      return res.json({ success: false, message: "Not Authorized" });
    }

    const user = await User.findById(userId);
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
