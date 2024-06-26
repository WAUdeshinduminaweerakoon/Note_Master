const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
});

const NoteModel = mongoose.model('Note', noteSchema);

module.exports = NoteModel;
