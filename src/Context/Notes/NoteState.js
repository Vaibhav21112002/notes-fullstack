import { useState } from "react";
import NoteContext from "./NoteContext";
import api from "../../api/index";
import swal from "sweetalert";

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [name, setName] = useState("");
  const getNotes = async () => {
    const token = localStorage.getItem("token");
    const res1 = await api.get("/notes", {
      headers: {
        "auth-token": token,
      },
    });
    setNotes(res1.data.notes);
  };
  const addNote = async (data) => {
    const token = localStorage.getItem("token");
    const res = await api.post(
      "/auth/getuser",
      {},
      {
        headers: {
          "auth-token": token,
        },
      }
    );
    const user = { id: res.data.user._id };
    const newNote = { ...data, user };
    const res1 = await api.post("/notes", newNote, {
      headers: {
        "auth-token": token,
      },
    });
    setRefresh(!refresh);
  };
  const deleteNote = async (id) => {
    const token = localStorage.getItem("token");
    const res = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this note!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (!res) {
      return;
    }
    const res1 = await api.delete(`/notes/${id}`, {
      headers: {
        "auth-token": token,
      },
    });
    swal({
      title: "Done!",
      text: "You Have Successfully Deleted Your Note!",
      icon: "success",
      button: "Ok",
    });
    setRefresh(!refresh);
  };
  const editNote = (id, data) => {
    const token = localStorage.getItem("token");
    const { title, description } = data;
    const res1 = api.put(
      `/notes/${id}`,
      { title, description },
      {
        headers: {
          "auth-token": token,
        },
      }
    );
    setRefresh(!refresh);
  };
  const register = async (data) => {
    const res = await api.post("/auth/register", data);
    if (res.data.status) {
      swal({
        title: "Welcome!",
        text: "You Have Successfully Registered in to My Notes!",
        icon: "success",
        button: "Ok",
      });
    } else {
      swal({
        title: "Error!",
        text: "User Already Exists!",
        icon: "error",
        button: "Ok",
      });
      return;
    }
  };
  const login = async (data) => {
    const res = await api.post("/auth/login", data);
    if (res.data.status) {
      setLoggedIn(true);
      localStorage.setItem("token", res.data.token);
      setName(res.data.user.name);
      swal({
        title: "Welcome!",
        text: "You Have Successfully Logged in to My Notes!",
        icon: "success",
        button: "Ok",
      });
    } else {
      swal({
        title: "Error!",
        text: "Invalid Credentials!",
        icon: "error",
        button: "Ok",
      });
    }
    window.location.reload();
  };
  const logout = async (data) => {
    const res = await swal({
      title: "Are you sure?",
      text: "Do You really want to logout!",
      icon: "warning",
      buttons: ["NO", "YES"],
      dangerMode: true,
    });
    if (!res) {
      return;
    }
    localStorage.removeItem("token");
    setLoggedIn(false);
    swal({
      title: "Done!",
      text: "You Have Logged Out Successfully!",
      icon: "success",
      button: "Ok",
    });
    window.location.reload();
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        login,
        register,
        loggedIn,
        setLoggedIn,
        logout,
        getNotes,
        refresh,
        setNotes,
        name,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
