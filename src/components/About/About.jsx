import React from "react";
import { NavLink } from 'react-router-dom';
import './About.css';
import Title from "../Title/Title";
import foto from './../../img/foto.png';


const About = () => {

    return (
        <div className="about">
            <Title title={'Обо мне'} />
            <div className="about__info">
                <div className="about__description">
                    <h2>Sed Ut Perspiciatis</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                    
                <NavLink to={'/sample'} className="about__link">Смотреть работу</NavLink>
                </div>
                <img src={foto} className="about__foto" alt="foto" />
            </div>
        </div>
    );
}

export default About;