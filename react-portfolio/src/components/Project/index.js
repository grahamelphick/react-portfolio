import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div style={{ textAlign: "center"}}>
            <a href={props.app} target="_blank"><strong>{props.name}</strong></a>
            <br /><br />
            <a href={props.app} target="_blank">
                <img src={props.image} alt={props.name + " app screenshot"} className="img-responsive" style={{ width: "70%" }}/>
            </a>
            <br/>
            <a href={props.github} target="_blank">GitHub Repository</a>
            <br /><br />
            <p><em>Description:</em>
                <br /><br />
                {props.description}
            </p>
            <br />
            <p><em>Technologies Used:</em>
             <br /><br />
                {props.technologies}
            </p>
            <br />
            <hr />
        </div>
    );
}

export default Project;