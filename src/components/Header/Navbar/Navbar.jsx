import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <ul className="nav-list">
            <li>
                <NavLink activeClassName='active' to='/about'>Главная</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/sample'>Пример</NavLink>
            </li>
        </ul>
    );
}

export default Navbar;