const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.MONGO_URI;

const connnect =(async)=>{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('DB is connected');
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = connnect;