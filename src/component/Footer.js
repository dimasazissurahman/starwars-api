import React from 'react';
import './Footer.css';
import logo from '../assets/star-wars-logo-png-8.png'

const Footer = () => {
    return (
        <div>
            <div className={"space-between-footer"}></div>
            <footer className="container-footer">
                <img src={logo} />
            </footer>
        </div>
    );
}
export default Footer;