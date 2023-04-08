import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial =[
    {
      "_id": "642f17f9e14b7c01bc80936d",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.108Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809370",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.417Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809373",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.638Z",
      "__v": 0,
    },
    {
      "_id": "642f17f9e14b7c01bc80936d",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.108Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809370",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.417Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809373",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.638Z",
      "__v": 0,
    },    {
      "_id": "642f17f9e14b7c01bc80936d",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.108Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809370",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.417Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809373",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.638Z",
      "__v": 0,
    },    {
      "_id": "642f17f9e14b7c01bc80936d",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.108Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809370",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.417Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809373",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.638Z",
      "__v": 0,
    },    {
      "_id": "642f17f9e14b7c01bc80936d",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.108Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809370",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.417Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809373",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.638Z",
      "__v": 0,
    },    {
      "_id": "642f17f9e14b7c01bc80936d",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.108Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809370",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.417Z",
      "__v": 0
    },
    {
      "_id": "642f17f9e14b7c01bc809373",
      "user": "642c81355fc613920149a0d2",
      "title": "My Note Title",
      "description": "Let's See If ITS WORKING",
      "tag": "Test",
      "date": "2023-04-06T19:05:29.638Z",
      "__v": 0,
    },
  ]
  const [notes, setNotes]= useState(notesInitial)
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
