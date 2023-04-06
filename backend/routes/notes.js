const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const mongoose = require("mongoose");
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

// ROUTE: GET ALL THE NOTES USING api/notes/getuser
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  // console.log(req.user.id)
  try {
      const notes = await Notes.find({ user: req.user.id });
    
      res.json(notes);
    
  } catch (error) {
    console.error(error.message);
    res.status(501).json({error}).send("INTERNAL SERVER ERROR OCCURED")
  }
});

// ROUTE: ADD NOTES USING api/notes/addnotes
router.post(
  "/addnotes",fetchUser,
  [
    body("title").isLength({ min: 3 }),
    body("description").isLength({ min: 10 }),
  ],
  async (req, res) => {


    //RETURN ERROR IF VALIDATION IS NOT MET
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, tag } = req.body;
        const notes = await Notes.create({
            user:req.user.id,title,description,tag
        })
        const savedNote = await notes.save();
    
        res.json(savedNote);
        
    } catch (error) {
        console.error(error.message);
      res.status(500).json({error}).send("INTERNAL SERVER ERROR OCCURED");
    }

  }
);


// ROUTE: Update Existing Note USING api/notes/updatenote/:id

router.put('/updatenote/:id',fetchUser,async (req,res)=>{
    const {title,description,tag}= req.body;
    //CREATING NEW NOTE
    let newNote={};
    if(title) newNote.title = title;
    if(description) newNote.description = description;
    if(tag) newNote.tag = tag;


    //FIND NOTE AND UPDATE
    let note =await  Notes.findById(req.params.id);
    if(!note){return res.status(404).send("NOT FOUND")};

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("NOT ALLOWED")
    }

    note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote});
    res.json(note);
})


module.exports = router;
