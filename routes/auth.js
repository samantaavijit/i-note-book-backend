const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ThisIsi-note-backend-s@manta";

// Create a user using: POST "/api/auth/createuser". Doesn't require Auth
router.post(
  "/createuser",
  [
    body("name", "Enter valid Name").isLength({ min: 5 }),
    body("email", "Enter valid Email").isEmail(),
    body("password", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // If there are an errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check whether the user already exists or not
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({
          message: `Duplicate key error, email id already exist!`,
        });
      }
      // create hasing
      const solt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, solt);
      // Create new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      // create jwt token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.status(201).json({ token: authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Authenticate a user using: POST "/api/auth/login". Doesn't require Auth
router.post(
  "/login",
  [
    body("email", "Enter valid Email").isEmail(),
    body("password", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // If there are an errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          error: `Please try to login with correct credentials`,
        });
      }
      const passwordCompare =await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({
          error: `Please try to login with correct credentials`,
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.status(201).json({ token: authToken });

    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
