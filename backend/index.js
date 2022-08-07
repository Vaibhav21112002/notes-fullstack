const db = require('./db/index')
const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth-router');
const notesRouter = require("./routes/notes-router");
db();
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5001;

app.get('/', (req, res)=>{
    res.send("Status Ok!")
})


app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});