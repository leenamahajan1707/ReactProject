

import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesinitial = [
        {
            "_id": "6142ef6e0e5cf1b5cd29820f",
            "user": "61419ea3ac5a5fa1a5012bd3",
            "title": "my title",
            "description": "description",
            "tag": "tag",
            "date": "2021-09-16T07:17:02.725Z",
            "__v": 0
        },
        {
            "_id": "6142ef6f0e5cf1b5cd298211",
            "user": "61419ea3ac5a5fa1a5012bd3",
            "title": "my title",
            "description": "description",
            "tag": "tag",
            "date": "2021-09-16T07:17:03.417Z",
            "__v": 0
        },
        {
            "_id": "6142ef7d0e5cf1b5cd298214",
            "user": "61419ea3ac5a5fa1a5012bd3",
            "title": "my title1",
            "description": "description 1",
            "tag": "tag",
            "date": "2021-09-16T07:17:17.161Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesinitial)

    //Add Note
    const addNote = (title, description, tag) => {
        // TODO:API call
        console.log("adding a new note")
        const note = {
            "_id": "6142ef7d0e5cf1b5cd298214",
            "user": "61419ea3ac5a5fa1a5012bd3",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-16T07:17:17.161Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //Delete Note
    const deleteNote = (id) => {
        console.log("deleting note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }


    //Edit Note
    const editNote = (id, title, description, tag) => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }} >
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;