import React, { useEffect, useContext, useRef, useState } from "react";
import NoteContext from "../context/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, setNotes, getAllNotes , editNote} = context;
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "default" });
  useEffect(() => {
    getAllNotes();
  }, [])
  const updateNote = (currentNote) => {
    console.log("UPDATE NOTE CLICKED")
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description,etag:currentNote.tag})
  }
  const ref = useRef()
  const refClose = useRef()
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id,note.etitle, note.edescription, note.etag,)
    refClose.current.click();
    // console.log(note.title, note.description, note.tag)
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote />
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit Notes
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"> Edit Note</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input type="text" className="form-control" id="edescription" value={note.edescription}name="edescription" onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button  ref={refClose}  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((notes) => {
          return <NoteItem note={notes} key={notes._id} updateNote={updateNote} />;
        })}
      </div>
    </>

  );
}
