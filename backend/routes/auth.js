const express = require('express');
const router = express.Router();
const User=require('../models/User');

const { body, validationResult } = require('express-validator');


//SIGNUP NEW USER . NO AUTHENTICATION REQUIRED

router.post('/',[body('name').isLength({min:5}),body('password').isLength({min:10}),body('email').isEmail()],
(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    }).then(user => res.json(user)).catch(err => {
        console.log("Error Occures")
        res.json({ error : "Invalid Input" , MSG:err })
    });
    // const user=User(req.body)
    // user.save();
    // console.log(user)
})

// router.get('/',(req,res)=>{
//    console.log("AUTH JS ACCESSED THE MSG IS")
//    res.send("HEY AUTH JS")
// })

module.exports = router