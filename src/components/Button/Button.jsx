import React from "react";
import './Button.css';

const Button = (props) => {
    return (
        <button onClick={props.fetchData}>{props.title}</button>
    );
}

export default Button;