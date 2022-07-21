import React,{ useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const About = () => {
  const a=useContext(noteContext)
  return (
    <div>
      This is About :- {a.user}
    </div>
  )
}

export default About