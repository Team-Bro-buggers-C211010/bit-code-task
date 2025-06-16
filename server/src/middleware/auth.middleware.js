import jwt from "jsonwebtoken";
import User from './../models/userSchema.js';


export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log("Error in verifyToken: ", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req?.user?.role !== "admin") {
    return res.status(403).json({ message: "You don't have admin access" });
  }
  next();
};
