const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } = require("firebase/auth");
const { app } = require("./firebase");
const User = require("../models/User");

const auth = getAuth(app);

exports.RegisterWithEmailPassword = async (req, res) => {
    const { email, password, username } = req.body; // Use username (lowercase)
    
    if (!email || !password || !username) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
  
      const user = await User.create({ username, email, firebaseId: firebaseUser.uid });
  
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
// Login with Email and Password
exports.LoginWithEmailPassword = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password are required." });
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    const user = await User.findOne({ firebaseId: firebaseUser.uid });

    if (!user) {
      return res.status(404).json({ error: "User not found in database." });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Login with Google (Server-side OAuth)
exports.LoginWithGoogle = async (req, res) => {
  const { idToken } = req.body;
  if (!idToken) {
    return res.status(400).json({ error: "ID Token is required" });
  }

  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await auth.signInWithCredential(provider.credential(idToken));
    const firebaseUser = userCredential.user;

    let user = await User.findOne({ firebaseId: firebaseUser.uid });

    if (!user) {
      user = await User.create({
        firebaseId: firebaseUser.uid,
        email: firebaseUser.email,
        username: firebaseUser.displayName,
      });
    }

    res.status(200).json({ message: "Google Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};