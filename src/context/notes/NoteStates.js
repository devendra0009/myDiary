import React, { useState } from 'react'
import NoteContext from './NoteContext'

//defining states here that we want to use anywhere directly

const NoteStates = (props) => {
    const notesInitial=[
      {
        "_id": "62d6bd382ac1be78aaad761f",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": "3rd title",
        "description": "this is my first note",
        "tag": "noob",
        "date": "2022-07-19T14:18:32.661Z",
        "__v": 0
      },
      {
        "_id": "62d90409d806ddab340b9f61",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": "pdaai krni hai",
        "description": "code with harry vido krna hai",
        "tag": "study",
        "date": "2022-07-21T07:45:13.849Z",
        "__v": 0
      },
      {
        "_id": "62d90409d806ddab340b9f61",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": "sona hai",
        "description": "10bje se phle",
        "tag": "sleeping",
        "date": "2022-07-21T07:45:13.849Z",
        "__v": 0
      },
      {
        "_id": "62d90409d806ddab340b9f61",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": "gym krna hai",
        "description": "6bje gym jana hai",
        "tag": "gym",
        "date": "2022-07-21T07:45:13.849Z",
        "__v": 0
      },
      {
        "_id": "62d6bd382ac1be78aaad761f",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": "3rd title",
        "description": "this is my first note",
        "tag": "noob",
        "date": "2022-07-19T14:18:32.661Z",
        "__v": 0
      },
      {
        "_id": "62d90409d806ddab340b9f61",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": "pdaai krni hai",
        "description": "code with harry vido krna hai",
        "tag": "study",
        "date": "2022-07-21T07:45:13.849Z",
        "__v": 0
      },
      {
        "_id": "62d90409d806ddab340b9f61",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": "sona hai",
        "description": "10bje se phle",
        "tag": "sleeping",
        "date": "2022-07-21T07:45:13.849Z",
        "__v": 0
      },
      {
        "_id": "62d90409d806ddab340b9f61",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": "gym krna hai",
        "description": "6bje gym jana hai",
        "tag": "gym",
        "date": "2022-07-21T07:45:13.849Z",
        "__v": 0
      },
    ]

    const [notes,setNotes]=useState(notesInitial)  //so as to add or delete note from notes array

    //add a note
    const addNote=({title,description,tag})=>{
      console.log('adding a note');
      let note={
        "_id": "62d90409d806ddab340b9f61",
        "user": "62d6ba50ad012f0f6d82797b",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-07-21T07:45:13.849Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
      console.log(notes);
    }
    //delete a note
    const deleteNote=(id)=>{
      console.log('deleting...'+id);
      //use filter method to remove the note with the id passed
      const newNotes= notes.filter((note)=> note._id!==id)  //so filter method pure notes array ko traverse krega or jin-jin note ki id not equal hai id given k un-unko ek array me dalkr vo array return krdega or hm us array ko setNotes me daldege
      setNotes(newNotes)
    }
    //edit a note
    const editNote=(id)=>{
      
    }
  return (
    <>
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
    {/* NoteContext k andr jo koi bhi hoga vo access krpaega 'value' ko */}
        {props.children}  
    </NoteContext.Provider>

    </>
  )
}

export default NoteStates