const Note = require('../models/Note');
const User = require('../models/User');

module.exports.getNotes = async(req,res)=>{
    try{
        const notes = await Note.find({user:req.user.id});
        return res.status(200).json({
            message: "Notes fetched successfully",
            notes
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error fetching notes",
            error: err
        })
    }
}

module.exports.createNote = async(req,res)=>{
    const {title, description} = req.body;
    const note = new Note({
        user:req.user.id,
        title,
        description
    });
    try{
        await note.save();
        return res.status(200).json({
            message: "Note created successfully",
            note
        })
    }catch(err){
        return res.status(500).json({
            message: "Error creating note",
            error: err
        })
    }
}

module.exports.updateNote = async(req,res)=>{
    const {title, description} = req.body;
    const {id} = req.params;
    try{
        const note = await Note.findOne({_id:id, user:req.user.id});
        if(!note){
            return res.status(404).json({
                message: "Note not found"
            })
        }
        note.title = title;
        note.description = description;
        await note.save();
        return res.status(200).json({
            message: "Note updated successfully",
            note
        })
    }catch(err){
        return res.status(500).json({
            message: "Error updating note",
            error: err
        })
    }
}

module.exports.deleteNote = async(req,res)=>{
    const {id} = req.params;
    try{
        const note = await Note.findOne({_id:id, user:req.user.id});
        if(!note){
            return res.status(404).json({
                message: "Note not found"
            })
        }
        await note.remove();
        return res.status(200).json({
            message: "Note deleted successfully"
        })
    }catch(err){
        return res.status(500).json({
            message: "Error deleting note",
            error: err
        })
    }
}