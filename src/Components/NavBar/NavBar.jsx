import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <Link to={"/"}><h1>ReclaimHer Healing</h1></Link>
            <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/forum"}>Forum</Link></li>
                <li><Link to={"/resources"}>Resources</Link></li>
                <li><Link to={"/events"}>Events</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;