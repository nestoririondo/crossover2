import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_TOKEN = process.env.SECRET_TOKEN;

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, SECRET_TOKEN, {
    expiresIn: "1h",
  });
};

export const loginUser = async (req, res) => {
  console.log("login attempt");
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    console.log("validPassword", validPassword)
    if (!validPassword) {
      return res.status(403).json({ message: "Invalid credentials." });
    }
    const token = generateToken(user);
    res.json({ token, user: { username: user.name, email: user.email } });
    console.log("loginUser", user, token)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { name, email, password: hashedPassword };
  console.log("Creating user", newUser);
  try {
    const data = await User.create(newUser);
    res.status(201).json(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};
