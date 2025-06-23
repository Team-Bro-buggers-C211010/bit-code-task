import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import { generateToken } from "./../lib/utils.js";

export const register = async (req, res) => {
  const { userName, email, password, role } = req.body;
  try {
    const isUserExists = await User.findOne({ email });
    if (isUserExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
      role,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      return res.status(201).json({
        _id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
        role: newUser.role,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in register: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      generateToken(user._id, res);
      return res.status(200).json({
        _id: user._id,
        userName: user.userName,
        email: user.email,
        role: user.role,
      });
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error in login: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      sameSite: "none",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Error in logout: ", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth = (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    console.error("Error in checkAuth: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
