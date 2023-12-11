import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <Link to={"/"}><h1>ReclaimingHer Healing</h1></Link>
            <ul>
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