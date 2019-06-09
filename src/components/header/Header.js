import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="header" data-test="header">
            <img src="https://via.placeholder.com/300x300.png?text=No Image" className="logo-image" data-test="logo-image" alt="Logo"/>
            <nav>
                <ul className="nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/sign-up">SignUp</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;