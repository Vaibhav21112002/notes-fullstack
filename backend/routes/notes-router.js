const express = require('express');
const router = express.Router();
const fetchUser = require("../middleware/login");
const {getNotes, createNote, updateNote, deleteNote} = require("../controllers/notes-ctrl.js");

router.get("/", fetchUser,getNotes);
router.post("/", fetchUser,createNote);
router.put("/:id", fetchUser,updateNote);
router.delete("/:id", fetchUser,deleteNote);

module.exports = router;