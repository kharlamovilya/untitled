import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import logo from '../assets/logo.png'; // adjust path as needed

const Header = () => {
    return (<div className="container">

        <nav className="navbar navbar-expand-lg">
            <Link to="/" className="logo-button">
                <img src={logo} alt="Logo" className="logo-img" />
            </Link>


            <div className="navbar-brand">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/moments" className="nav-link">MOMENTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reflections" className="nav-link">REFLECTIONS</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>);
};

export default Header;