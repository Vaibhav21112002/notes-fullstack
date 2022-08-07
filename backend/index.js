const db = require('./db/index')
const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth-router');
db();
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5001;

app.get('/', (req, res)=>{
    res.send("Status Ok!")
})


app.use('/api/auth', authRouter);
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});