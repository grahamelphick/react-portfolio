import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div>
            <p>{props.name}</p>
            {/* <img src={props.src} alt={props.name}></img> */}
            <p>{props.github}</p>
            <p>{props.description}</p>
            <p>{props.technologies}</p>
        </div>
    );
}

export default Project;