import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div>
            <a href={props.app} target="_blank">{props.name}</a>
            <br/><br/>
            {/* <img src={props.src} alt={props.name}></img> */}
            <a href={props.github} target="_blank">GitHub Repository</a>
            <br /><br />
            <p>Description:
                <br/><br/>
                {props.description}
            </p>
            <br />
            <p>Technologies Used:
             <br /><br />
                {props.technologies}
            </p>
            <br/>
            <hr/>
        </div>
    );
}

export default Project;