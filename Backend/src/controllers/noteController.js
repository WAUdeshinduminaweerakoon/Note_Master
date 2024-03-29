
const NoteModel = require("../models/noteModel");
const UserModel = require("../models/userModel");

exports.createNote = async (req, res) => {
    try {
        const noteId = req.body._id;
        // Check if the note already exists
        const existingNote = await NoteModel.findOne({ _id: noteId });

        // Updating existing note
        if (existingNote) {
            existingNote.set("note",req.body.note)
            await existingNote.updateOne() ;
            return res.status(200).json( await NoteModel.find({email : req.body.email}));
        }else {
            const newNote = new NoteModel({
                note: req.body.note ,
                email : req.body.email
            });
            const savedNote = await newNote.save();
            return res.status(200).json(await NoteModel.find({email : req.body.email}));
        }
        // Create a new user

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNotes = async (req, res) => {
    try {
        return res.status(200).json(await NoteModel.find({email : req.body.email}));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const existingNote = await NoteModel.findOne({_id : req.body._id , email : req.body.email});
        if (existingNote){
            await NoteModel.deleteOne({_id : req.body._id})
            return res.status(200).json(await NoteModel.find({email : req.body.email}));
        }else {
            res.status(403).json("Unauthorized");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
