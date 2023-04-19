import "./App.css";
import { useEffect, React } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
        <Alert message="SEE THE ALERT"/>
          <div className="container my-3  ">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
