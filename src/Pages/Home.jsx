import React, { useEffect, useContext } from "react";
import Navbar from "../Components/Navbar";
import NoteContext from "../Context/Notes/NoteContext";
import NoteCard from "../Components/NoteCard";

const Home = () => {
  const { notes, getNotes, setNotes, refresh } = useContext(NoteContext);
  useEffect(() => {
    getNotes();
  }, [refresh]);
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-5xl">Your Notes</h1>
      <div className="w-full flex flex-wrap justify-center">
        {notes.map((note, index) => (
          <NoteCard
            key={note.id}
            note={note}
            number={index}
            setNotes={setNotes}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
