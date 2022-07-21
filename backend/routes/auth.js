//what to show on endpoint '/api/auth'
//its like a miniapp

const express = require("express");
const User = require("../models/User"); //so that we can make the user according to userSchema
const { body, validationResult } = require("express-validator"); //to add some data validation
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

const JWT_SECRET = "5JSD@$4";

const router = express.Router();

//endpoint is /api/auth/createuser
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }), //these all are data validations
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log(req.body);

    //this gonna handle agr data validation me koi dikkt ati hai to
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //finding if the user with this email already exist or not??
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exist!!" });
      }

      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(req.body.password, salt); //awatied since it returns a promise
      //this will directly add the inputted data to database
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
      });

      let data = {
        user: {
          id: user.id,
        },
      };

      //authToken user ki id se ban dia added with our JWT_SECRET 
      let authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Some error occured");
    }
  }
);

//making a login endpoint,Authenticate a user using :POST "/api/auth/login"
router.post(
  "/login",
  [
    //these all are data validations
    body("email", "Enter the valid email").isEmail(),
    body("password", "Kindly enter a password").exists(),
  ],
  async (req, res) => {
    console.log(req.body);

    //this gonna handle agr data validation me koi dikkt ati hai to
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      //finding if the user with this email already exist or not??
      let user = await User.findOne({ email }); //using es6 just write email it will automatically assign it the user's email value
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please Enter valid credentials!!" }); //agr user with same mail exists so just throw this error
      }

      const passwordComp = await bcrypt.compare(password, user.password); //compare the entered password with the existing user's password

      //agr password match nhi krta to
      if (!passwordComp) {
        return res
          .status(400)
          .json({ error: "Please Enter valid credentials!!" });
      }

      let data = {
        user: {
          id: user.id,
        },
      };
      let authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal Server error occured!!");
    }
  }
);

//making an endpoint to getUser using a token and converting that token into user details using a middleware
router.post(
  "/getUser",fetchUser, async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("--password"); //means userId i get from middleware, find it, and select that whole user except its password

      res.send(user);
    } catch (error) {
      res.status(500).send("Internal Server error occured!!");
    }
  }
);

module.exports = router;

// const user=User(req.body);
// user.save();

//   .then((user) => res.json(user))
//   .catch((err) => {
//     res.json({ err: "Please Enter Valid Credentials", message:err.message });
//   })
