import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" width="200px" height="200px" />
                <p className="logo-text">Job Beyond the Imagination</p>
            </div>
            <div className="nav-links">
            <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;
