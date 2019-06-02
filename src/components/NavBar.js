import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/sign-up">SignUp</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;