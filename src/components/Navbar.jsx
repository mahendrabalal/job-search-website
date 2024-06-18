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
                <Link to='/home'><img src={Logo} alt="Logo" width="50px" height="25px" /></Link>
            
            </div>
            <div className={"nav-links "}>
            <Link to="/home" className={"nav-button " + theme}>Home</Link>
            <Link to="/add-job" className={"nav-button " + theme}>Add Job</Link>
            <Link to="/about" className={"nav-button " + theme}>About</Link>
            <Link to="/services" className={"nav-button " + theme}>Services</Link>
            <Link to="/contact" className={"nav-button " + theme}>Contact</Link>
        </div>
            <button className='theme-btn' onClick={toggleTheme}>
                {theme === 'light' ? 'dark': 'light'}
            </button>
        </div>
    );
}

export default Navbar;
