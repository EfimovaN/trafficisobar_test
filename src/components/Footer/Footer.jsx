import React from "react";
import './Footer.css';


const Footer = (props) => {
    const today = new Date().getFullYear();
    
    return (
        <footer className="footer">Copyright &copy; {today}</footer> 
    );
}

export default Footer;