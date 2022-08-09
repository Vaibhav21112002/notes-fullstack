import React, { useState, useContext } from "react";
import { EditFilled, DeleteFilled, SaveFilled } from "@ant-design/icons";
import NoteContext from "../Context/Notes/NoteContext";

const NoteCard = ({ note, number }) => {
  const { deleteNote, editNote } = useContext(NoteContext);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: note.title,
    description: note.description,
    tag: note.tag,
  });
  return (
    <div className="flex flex-col justify-center  border border-gray-200 p-4 rounded-lg w-full md:w-1/3 my-4 min-h-36 mx-4">
      <div className="w-full h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <h1>
          {number + 1}
          {". "}{" "}
          {open ? (
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-indigo-100 text-center"
            ></input>
          ) : (
            note.title
          )}
        </h1>
      </div>
      <p>
        {open ? (
          <textarea
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full h-36"
          ></textarea>
        ) : (
          note.description
        )}
      </p>
      <div className="w-full flex justify-end gap-5">
        {/* {open ? (
          <SaveFilled
            className="cursor-pointer"
            onClick={() => {
              editNote(note._id, form);
              setOpen(!open);
            }}
          />
        ) : (
          <EditFilled
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        )} */}

        <DeleteFilled
          className="cursor-pointer"
          onClick={() => {
            deleteNote(note._id);
          }}
        />
      </div>
    </div>
  );
};

export default NoteCard;
