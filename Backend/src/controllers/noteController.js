
const NoteModel = require("../models/noteModel");
const UserModel = require("../models/userModel");

exports.createNote = async (req, res) => {
    console.log(req.body);
    try {
        const noteId = req.body._id;
        if (noteId!=null){
            const existingNote = await NoteModel.findOne({ _id: noteId });
            if (existingNote) {
                existingNote.set("note",req.body.note)
                const filter = { _id: noteId };
                const update = { note:  req.body.note};
                const  l = await NoteModel.findByIdAndUpdate(filter,update);
                console.log(l);
                console.log(existingNote);
                return res.status(200).json( await NoteModel.find({email : req.body.email}));
            }
        }
        // Check if the note already exists

        // Updating existing note
        else {
            const totalNotes = await NoteModel.count();
            const newNote = new NoteModel({
                note: req.body.note ,
                email : req.body.email
            });
            await newNote.save();
            return res.status(200).json(await NoteModel.find({email : req.body.email}));
        }
        // Create a new user

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNotes = async (req, res) => {
    try {
        return res.status(200).json(await NoteModel.find({email : req.params.email}));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const existingNote = await NoteModel.findOne({id : req.body.id , email : req.body.email});
        if (existingNote){
            await NoteModel.deleteOne({id : req.body.id})
            return res.status(200).json(await NoteModel.find({email : req.body.email}));
        }else {
            res.status(403).json("Unauthorized");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};