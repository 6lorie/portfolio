import { useState } from "react";
import "../css/Navbar.css";
import "../section/Home"
import "../section/Service"
import "../section/Project"
import "../section/Contact"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/glorie_logo.png" />
            </div>

            {/* Burger Button */}
            <div
                className={`burger ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Nav Links */}
            <ul className={`nav-links ${open ? "show" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;