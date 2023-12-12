import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
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
                <li><Link to={"/"} onClick={handleLinkClick}>Home</Link></li>
                <li><Link to={"/about"} onClick={handleLinkClick}>About</Link></li>
                <li><Link to={"/forum"} onClick={handleLinkClick}>Forum</Link></li>
                <li><Link to={"/resources"} onClick={handleLinkClick}>Resources</Link></li>
                <li><Link to={"/events"} onClick={handleLinkClick}>Events</Link></li>
                <li><Link to={"/contact"} onClick={handleLinkClick}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;