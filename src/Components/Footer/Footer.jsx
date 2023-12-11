import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>

            <p>© 2023 ReclaimHer Healing, Inc.</p>
            <Link to={"/"}><h1></h1></Link>
            <ul>
                <li><Link to={"/"}>Privacy Policy</Link></li>
                <li><Link to={"/about"}>Terms Of Services</Link></li>
                <li><Link to={"/forum"}>Contact Information</Link></li>
            </ul>

        </footer>
    );
};

export default Footer;