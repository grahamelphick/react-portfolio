import React from "react";
import Project from "../components/Project";
import projects from "../projects.json"

function Projects() {
    return (
        <div>
            <Project
                name={projects[0].name}
                src={projects[0].image}
                github={projects[0].github}
                description={projects[0].description}
                technologies={projects[0].technologies}
            />
        </div>
    );

}

export default Projects