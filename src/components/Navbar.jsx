import "./Navbar.css";
import Logo from "../assets/Logo.png";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" width="200px" height="200px" />
            </div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
