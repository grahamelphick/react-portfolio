import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div>
            <a href={props.app} target="_blank">{props.name}</a>
            <br /><br />
            <img src={props.image} alt={props.name + " app screenshot"} className="img-responsive" width="70%"/>
            <br/>
            <a href={props.github} target="_blank">GitHub Repository</a>
            <br /><br />
            <p>Description:
                <br /><br />
                {props.description}
            </p>
            <br />
            <p>Technologies Used:
             <br /><br />
                {props.technologies}
            </p>
            <br />
            <hr />
        </div>
    );
}

export default Project;