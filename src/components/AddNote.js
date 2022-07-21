import React, { useState,useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
    const context = useContext(noteContext) //to use addNote function from contextApi
    const {addNote}=context

    const [note,setNote]=useState({title:"",description:"",tag:"default"})
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value}) 
        //means jo note me h vo to likh hi de or baki jo bhi ara hai use overwrite krde 
        //e.target.name ki value me inputted value rkhde
    }

    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note)
    }

  return (
    <div className="container my-3">
      <div>
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
