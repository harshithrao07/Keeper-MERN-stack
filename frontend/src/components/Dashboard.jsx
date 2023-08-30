import CreateArea from "./CreateArea";
import Note from "./Note";
import { useState, useEffect } from "react";
import axios from "axios";
const baseURL = "https://keeper-harshith.netlify.app";

const Dashboard = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/api/getAll`)
            .then(res => setNotes(res.data))
    }, [])

    function addNote(newNote) {
        axios.post(`${baseURL}/api/addNew`, newNote)
            .then(res => setNotes(res.data))
    }

    function deleteNote(id) {
        axios.post(`${baseURL}/api/delete`, { id })
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