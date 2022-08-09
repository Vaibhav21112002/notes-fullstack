import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddNote from "./Pages/AddNote";
import NoteContext from "./Context/Notes/NoteContext";

const App = () => {
  const { loggedIn, setLoggedIn } = useContext(NoteContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addnote" element={loggedIn ? <AddNote /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
