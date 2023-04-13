import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //GetAllNotes
  const getAllNotes = async () => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzgxMzU1ZmM2MTM5MjAxNDlhMGQyIn0sImlhdCI6MTY4MDY5Mjc2NX0.1YQ4O0Q6fC2APqa8V7_GHdOT75m6PzZeO7t607Ci73c",
      },
      // body: JSON.stringify(title,description,tag),
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  };
  //AddNOTE
  const addNote = async ({ title, description, tag }) => {
    // API CALL
    // const response = await fetch(`${host}/api/notes/addnotes`, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     "Content-Type": "application/json",
    //     "auth-token":
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzgxMzU1ZmM2MTM5MjAxNDlhMGQyIn0sImlhdCI6MTY4MDY5Mjc2NX0.1YQ4O0Q6fC2APqa8V7_GHdOT75m6PzZeO7t607Ci73c",
    //   },
    //   body: JSON.stringify(title, description, tag),
    // });
    // const json = response.json();
    const note = {
      _id: "642f517f9e14b7c01bc809370",
      user: "642c81355fc613920149a0d2",
      title: title,
      description: description,
      tag: tag,
      date: "2023-04-06T19:05:29.417Z",
      __v: 0,
    };
    // setNotes(notes.push(note)) this will throw error
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzgxMzU1ZmM2MTM5MjAxNDlhMGQyIn0sImlhdCI6MTY4MDY5Mjc2NX0.1YQ4O0Q6fC2APqa8V7_GHdOT75m6PzZeO7t607Ci73c",
      },
    });
    // const json = response.json();
    // console.log(json)
    console.log("deleting not with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id
    });
    // console.log(newNotes)
    setNotes(newNotes);
  };
  //EditNote
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(
      `${host}/api/notes/updatenote/642f17f8e14b7c01bc80936a`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzgxMzU1ZmM2MTM5MjAxNDlhMGQyIn0sImlhdCI6MTY4MDY5Mjc2NX0.1YQ4O0Q6fC2APqa8V7_GHdOT75m6PzZeO7t607Ci73c",
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const json = response.json();
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, deleteNote, editNote, addNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
