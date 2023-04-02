const express = require('express');
const router = express.Router();
const User=require('../models/User')


//SIGNUP NEW USER . NO AUTHENTICATION REQUIRED

router.post('/',(req,res)=>{
    res.send(req.body)
    const user=User(req.body)
    user.save();
    // console.log(user)
})

// router.get('/',(req,res)=>{
//    console.log("AUTH JS ACCESSED THE MSG IS")
//    res.send("HEY AUTH JS")
// })

module.exports = router