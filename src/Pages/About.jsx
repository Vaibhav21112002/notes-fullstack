import React from "react";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext);
  return (
    <div>
      <Navbar />
      About
    </div>
  );
};

export default About;
