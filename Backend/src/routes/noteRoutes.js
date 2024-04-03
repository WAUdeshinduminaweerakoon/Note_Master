const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.post("/create", noteController.createNote);
router.get("/get-notes/:email", noteController.getNotes);
router.post("/delete-note", noteController.deleteNote);

module.exports = router;