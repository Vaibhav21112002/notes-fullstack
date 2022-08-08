import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddNote from "./Pages/AddNote";
import NoteState from "./Context/Notes/NoteState";

const App = () => {
  return (
    <NoteState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addnote" element={<AddNote />} />
        </Routes>
      </Router>
    </NoteState>
  );
};

export default App;
