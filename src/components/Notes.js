import React, { useEffect,useContext } from "react";
import NoteContext from "../context/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

export default function Notes() {
    const context = useContext(NoteContext);
    const { notes, setNotes, getAllNotes } = context;
    useEffect(() => {
      getAllNotes();
    }, [])
    
  return (
    <>
    <AddNote/>
    <div className="row my-3">
        <h2>Your Notes</h2>
      {notes.map((notes) => {
        return <NoteItem note={notes} key={notes._id}/>;
      })}
    </div>
    </>

  );
}
