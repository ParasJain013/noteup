const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const JWT_SECRET = "NoteUp APP";

const fetchUser = require('../middleware/fetchUser')

const { body, validationResult } = require("express-validator");

//SIGNUP NEW USER . NO AUTHENTICATION REQUIRED

router.post(
  "/signup",
  [
    body("name").isLength({ min: 5 }),
    body("password").isLength({ min: 10 }),
    body("email").isEmail(),
  ],
  async (req, res) => {
    //if errors -> return status(400) and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //Check If User With Same Email Exist or NOT
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User With this Email already exist" });
      }
      //Creating Data in Database
      const salt = await bcrypt.genSalt(10);
      const crypted = await bcrypt.hash(req.body.password, salt); //Encrypting Password
      user = await User.create({
        name: req.body.name,
        password: crypted,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

//AUTHENTICATE USER FOR LOGIN
router.post(
  "/login",
  [
    body("email", "Enter Valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    try {
      let user = await User.findOne({email});
      if (!user) {
        return res.status(400).json({ error: "Wrong Credentials" });
      }
      const PasswordCompare = await bcrypt.compare(password, user.password);
      if (!PasswordCompare) {
        return res.status(400).json({success, error: "Wrong Credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error}).send("INTERNAL SERVER ERROR OCCURED");
    }
  }
);

//USER AUTHENTICATION USING TOKEN TO PROVIDE DATA

router.post('/getuser',fetchUser,async (req,res)=>{
  try {

    const userid = req.user.id;
    const data = await User.findById(userid).select('-password');
    console.log(req.user.id)
    res.status(200).json({data});
    
  } catch (error) {
    console.error(error.message);
      res.status(500).json({error}).send("INTERNAL SERVER ERROR OCCURED");
  }
})

module.exports = router;
