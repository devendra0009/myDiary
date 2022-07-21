import React,{ useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
    const context = useContext(noteContext)
    const {notes}=context
  return (
    <>
    <AddNote/>
    <div className="row my-3">
        <h2>Your Notes</h2>
      {
        notes.map((note,index)=>{
          return (
            <NoteItem key={index} note={note}/>
          )
        })
      }
    </div>
    </>
  )
}

export default Notes