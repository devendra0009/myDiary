import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//Swithc has been replaced with route
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteStates from "./context/notes/NoteStates";
import Alert from "./components/Alert";

function App() {
  return (
    <>
    {/* Abhi NoteStates k andr home and about hai to m vha pr value={state} vake state ko use krskta directly */}
    <NoteStates>
    <Router>
      <Navbar />
      {/* <Alert message="Alerttt!!"/> */}
      <div className="container">
      {/* use the same sytax given below bhot searching hogy iske chkkr me */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>  
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </div>
      </Router>
      </NoteStates>
    </>
  );
}

export default App;
