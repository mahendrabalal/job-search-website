import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/theme.context";


function Navbar() {
    const {theme, toggleTheme}= useContext(ThemeContext)
    return ( 
        <div className={"navbar " + theme}>
            <div className="logo">
                <img src={Logo} alt="Logo" width="50px" height="25px" />
            
            </div>
            <div className={"nav-links"}>
            <Link to="/home" className={"nav-button"}>Home</Link>
            <Link to="/about" className="nav-button">About</Link>
            <Link to="/services" className="nav-button">Services</Link>
            <Link to="/contact" className="nav-button">Contact</Link>
        </div>
            <button className='theme-btn' onClick={toggleTheme}>
                {theme === 'light' ? 'dark': 'light'}
            </button>
        </div>
    );
}

export default Navbar;
