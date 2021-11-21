import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './../../img/logo.png';
import Navbar from "./Navbar/Navbar";


const Header = (props) => {
    return (
        <header className="header">
            <NavLink to={'/about'}>
                <img src={logo} className="logo" alt="logo" />
            </NavLink>
            
            <Navbar/>
         
        </header>

    );
}

export default Header;