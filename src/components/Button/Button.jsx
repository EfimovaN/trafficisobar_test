import React from "react";

const Button = (props) => {
    return (
        <button onClick={props.fetchData}>{props.title}</button>
    );
}

export default Button;