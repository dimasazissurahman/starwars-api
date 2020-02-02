import React from 'react';
import './Header.css';
import LogoStarwars from '../assets/star_wars_logo_PNG42.png';

const Header = () => {
    const handlerClick = () => {
        return window.location.href = "/";
    }
    
    return (
        <header className="container-header">
            <div className="header-logo">
                <img src={LogoStarwars} />
            </div>
            <div className="header-title"><a>Star Wars Web</a></div>            
            <button className="header-button" onClick={() => handlerClick()}>Home</button>
        </header>
    );
}

export default Header;