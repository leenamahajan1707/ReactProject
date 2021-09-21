

import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesinitial = [

    ]

    const [notes, setNotes] = useState(notesinitial)

    //get all Note
    const getNote = async () => {
        //API CALL

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MTllYTNhYzVhNWZhMWE1MDEyYmQzIn0sImlhdCI6MTYzMTY5MjM3M30.zBckE2cnrvpmvXzwWiGJ_aJe0nLc9XickNbKf-K0dCI'
            },
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        console.log(json);
        setNotes(json)

    }
    //Add Note
    const addNote = async (title, description, tag) => {
        //API CALL

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MTllYTNhYzVhNWZhMWE1MDEyYmQzIn0sImlhdCI6MTYzMTY5MjM3M30.zBckE2cnrvpmvXzwWiGJ_aJe0nLc9XickNbKf-K0dCI'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        // const json = response.json(); // parses JSON response into native JavaScript objects

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
    const deleteNote = async (id) => {
        console.log("deleting note with id" + id);

        //API CALL

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MTllYTNhYzVhNWZhMWE1MDEyYmQzIn0sImlhdCI6MTYzMTY5MjM3M30.zBckE2cnrvpmvXzwWiGJ_aJe0nLc9XickNbKf-K0dCI'
            },

        });
        const json = response.json(); // parses JSON response into native JavaScript objects
        console.log(json)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }


    //Edit Note
    const editNote = async (id, title, description, tag) => {
        //API CALL

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MTllYTNhYzVhNWZhMWE1MDEyYmQzIn0sImlhdCI6MTYzMTY5MjM3M30.zBckE2cnrvpmvXzwWiGJ_aJe0nLc9XickNbKf-K0dCI'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        const json = response.json(); // parses JSON response into native JavaScript objects


        //logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }} >
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;