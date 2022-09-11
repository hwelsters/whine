const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const passwordIsStrong = (password) => {
  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  if (strongPassword.test(password)) return true;
  return false;
};

router.post("/register", async (req, res) => {
  console.log("REGISTER");

  if (!passwordIsStrong(req.body.password)) {
    res
      .status(406)
      .json("The password does not meet all the strength requirements");
    return;
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    if (err.keyPattern.email === 1)
      res.status(500).json("Email is already taken");
    if (err.keyPattern.username === 1)
      res.status(500).json("Username is already taken");
  }
});

module.exports = router;
