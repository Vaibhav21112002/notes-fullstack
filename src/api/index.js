import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

const api = axios.create({
  baseURL: "https://vaibhav-notes-backend.herokuapp.com/api",
});

export default api;
