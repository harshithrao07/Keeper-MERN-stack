import { useState } from "react";
import { Link } from "react-router-dom";


const Intro = (props) => {
    const [name,setName] = useState("")

    function handleChange(event)
    {
        const data = event.target.value
        setName(data);
    }

    function handleClick(event)
    {
        if(name.trim() !== "")
        {
            props.setName(name);
        }
        else
        {
            event.preventDefault();
        }
    }

    return (

        <div>
        <div className="intro-texts">
            <h1 className="h1-intro">Welcome to Keeper App</h1>
            <h4 className="p-intro">Your sleek and intuitive note-taking and task management solution.</h4>
            <h4 className="p-intro">Stay organized, capture ideas, and manage your tasks effortlessly.</h4>
        </div>
        <div className="intro">
            <div>
                <div className="form__group">
                    <input type="text" onChange={handleChange} className="form__input" id="name" placeholder="Full name" required autoComplete="off"/>
                </div>
                <div className="btnParent">
                <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }} onClick={handleClick}>
                        <button className="button-54" role="button">
                        <h5>Take me there</h5>
                        </button>
                </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Intro;
