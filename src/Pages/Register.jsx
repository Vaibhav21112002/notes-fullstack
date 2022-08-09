import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import NoteContext from "../Context/Notes/NoteContext";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(NoteContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  return (
    <div>
      <Navbar />
      <div className="flex w-[100%] justify-center my-8">
        <div className="flex flex-col md:w-1/3 w-[90%] my-4 ">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">
            Register Here
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={() => {
              console.log(form);
              register(form);
              navigate("/login");
            }}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Register
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Already Registred?{" "}
            <a
              onClick={() => navigate("/login")}
              className="cursor-pointer text-indigo-500 underline"
            >
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
