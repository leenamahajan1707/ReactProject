const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');

//ROUTE 1 : Get All the Notes using: POST "/api/notes/fetchallnotes"    require Login
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})

//ROUTE 2 : add new Notes using: POST "/api/notes/addnote"    require Login
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid Name').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 char').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        //if there are errors,return Bad Request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()

        res.json(savedNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})

module.exports = router