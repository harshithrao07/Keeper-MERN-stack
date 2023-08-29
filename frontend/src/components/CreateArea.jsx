import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useState } from "react";

const CreateArea = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function expand() {
        setExpanded(true);
    }

    function submitNote(event) {
        if (note.title.trim() !== "" && note.content.trim() !== "") {
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
        }
        event.preventDefault();
    }

    return(
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                        required
                    />
                )}
                <textarea
                    name="content"
                    onChange={handleChange}
                    onClick={expand}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                    required
                />
                <Zoom in={isExpanded}>
                    <Fab color="primary" onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;