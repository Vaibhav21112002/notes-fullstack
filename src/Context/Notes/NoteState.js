import { useState } from "react";
import NoteContext from "./NoteContext";
import api from "../../api/index";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62efe245a8e5784d62935311",
      user: "62efbc911c02b7f33982e5dc",
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tag: "Genral",
      date: "2022-08-07T16:03:17.570Z",
      __v: 0,
    },
    {
      _id: "62efe245a8e5784d62935311",
      user: "62efbc911c02b7f33982e5dc",
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tag: "Genral",
      date: "2022-08-07T16:03:17.570Z",
      __v: 0,
    },
    {
      _id: "62efe245a8e5784d62935311",
      user: "62efbc911c02b7f33982e5dc",
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tag: "Genral",
      date: "2022-08-07T16:03:17.570Z",
      __v: 0,
    },
    {
      _id: "62efe245a8e5784d62935311",
      user: "62efbc911c02b7f33982e5dc",
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tag: "Genral",
      date: "2022-08-07T16:03:17.570Z",
      __v: 0,
    },
    {
      _id: "62efe245a8e5784d62935311",
      user: "62efbc911c02b7f33982e5dc",
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tag: "Genral",
      date: "2022-08-07T16:03:17.570Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  const addNote = ({ note }) => {};
  const deleteNote = ({ id }) => {};
  const editNote = ({ id, note }) => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
