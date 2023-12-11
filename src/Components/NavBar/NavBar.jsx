import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <Link to={"/"}><h1>ReclaimingHer Healing</h1></Link>
            <ul>
                <li><Link to={"/Home"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Forum"}>Forum</Link></li>
                <li><Link to={"/Resources"}>Resources</Link></li>
                <li><Link to={"/Events"}>Events</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;