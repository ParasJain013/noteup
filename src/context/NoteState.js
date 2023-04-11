import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial =[
 {
      "_id": "642f17f9e314b7c01bc80936d",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.108Z",
      "__v": 0
    },
    {
      "_id": "642f517f9e14b7c01bc809370",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.417Z",
      "__v": 0
    },
  ]
  const [notes, setNotes]= useState(notesInitial)

  //AddNOTE
  const addNote=(title,description,tag)=>{
    console.log("Adding a new ntoe ")
    // API CALL
    const note =     {
      "_id": "642f517f9e14b7c01bc809370",
      "user": "642c81355fc613920149a0d2",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-04-06T19:05:29.417Z",
      "__v": 0
    };
    // setNotes(notes.push(note)) this will throw error
    setNotes(notes.concat(note))
  }

  //Delete a Note
  const deleteNote=(id)=>{
    console.log("deleting not with id"+id)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  //EditNote
  const editNote=()=>{

  }
  return (
    <NoteContext.Provider value={{notes,setNotes,deleteNote,editNote,addNote}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
