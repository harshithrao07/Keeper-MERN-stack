import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className='nav'>
            <Link to="/" style={{textDecoration:"none"}}>
            <h1 style={{ cursor: "pointer" }} className='navh1'>
                <FlareOutlinedIcon />
                Keeper
                <FlareOutlinedIcon />
            </h1>
            </Link>
            {props.name && (<h1 style={{ fontFamily:"Courier New"}}>
                Welcome, {props.name}!
            </h1>)}
        </header>
    )
}

export default Header;