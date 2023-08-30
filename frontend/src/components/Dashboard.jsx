import CreateArea from "./CreateArea";
import Note from "./Note";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get("https://keeper-app-f7s8.onrender.com//api/getAll")
            .then(res => setNotes(res.data))
    }, [])

    function addNote(newNote) {
        axios.post("https://keeper-app-f7s8.onrender.com//api/addNew", newNote)
            .then(res => setNotes(res.data))
    }

    function deleteNote(id) {
        axios.post("https://keeper-app-f7s8.onrender.com//api/delete", { id })
            .then(res => setNotes(res.data))
    }

    return (
        <div>
            <CreateArea onAdd={addNote} />
            {
                notes.map((noteItem, index) => {
                    return (
                        <Note
                            key={index}
                            id={noteItem._id}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDelete={deleteNote}
                        />
                    )
                })
            }
        </div>
    )
}

export default Dashboard;