const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User"); 
const { registerMail } = require('./mailController');
const { clientAuth } = require("../firebase/firebase");
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const saltRounds = 10;

// ✅ Signup Controller
exports.signup = async (req, res) => {
  const { email, password, firstName, lastName, username } = req.body;

  try {
    // Validate input
    if (!email || !password || !firstName || !lastName || !username) {
      return res.status(400).json({ message: "All fields (including username) are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create Firebase User using Client SDK
    const userCredential = await createUserWithEmailAndPassword(clientAuth, email, password);
    const firebaseUser = userCredential.user;
    console.log("User created in Firebase:", firebaseUser);

    // Save User in MongoDB
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      username,
      firebaseId: firebaseUser.uid,
    });

    await newUser.save();

    // Send welcome email using mailController
    try {
      await registerMail({ body: { name: `${firstName} ${lastName}`, email } });
      console.log("Welcome email sent successfully.");
    } catch (mailError) {
      console.error("Error sending welcome email:", mailError.message);
    }

    // Generate JWT Token
    const token = jwt.sign({ id: newUser._id }, SECRET_KEY, { expiresIn: "1h" });

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        email,
        firstName,
        lastName,
        username,
      },
    });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Signin Controller
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user in MongoDB
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password exists
    if (!user.password) {
      return res.status(400).json({ message: "Invalid password or user data corrupted." });
    }

    // Compare password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Firebase Sign-in for Verification (Optional)
    try {
      await signInWithEmailAndPassword(clientAuth, email, password);
      console.log("Firebase sign-in successful");
    } catch (firebaseError) {
      console.warn("Firebase sign-in failed (This won't affect your MongoDB sign-in):", firebaseError.message);
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    return res.status(200).json({ 
      message: "Sign-in successful", 
      token,
      user: { 
        id: user._id, 
        email, 
        firstName: user.firstName, 
        lastName: user.lastName, 
        username: user.username 
      }
    });

  } catch (error) {
    console.error("Signin Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
