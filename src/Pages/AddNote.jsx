import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import NoteContext from "../Context/Notes/NoteContext";

const AddNote = () => {
  const navigate = useNavigate();
  const { addNote, setRefresh, refresh } = useContext(NoteContext);
  const [form, setForm] = useState({ title: "", description: "", tag: "" });
  return (
    <div>
      <Navbar />
      <div className="flex w-[100%] justify-center my-8">
        <div className="flex flex-col md:w-1/3 w-[90%] my-4 ">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">
            Add A New Note
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={form.tag}
              onChange={(e) => setForm({ ...form, tag: e.target.value })}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={() => {
              addNote(form);
              setForm({ title: "", description: "", tag: "" });
              navigate("/");
            }}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
