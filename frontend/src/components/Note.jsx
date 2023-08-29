import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {

    function handleClick(id){
        props.onDelete(id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p> 
            <button onClick={() => handleClick(props.id)}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note;