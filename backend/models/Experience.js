const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    college:{
        type:String,
        default:"Delhi Technological University"
    },
    company:{
        type:String,
        required:true
    },
    interview_type:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }   
});

modules.export = mongoose.model('Note', NoteSchema);