
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Leena",
        "class": "5b"
    }

    const [state, setstate] = useState(s1)

    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "abc",
                "class": "6b"
            })

        }, 1000)
    }

    return (
        <NoteContext.Provider value={{ state, update }} >
            {/*  <NoteContext.Provider value={{}} > */}
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;