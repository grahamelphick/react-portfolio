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
                app={projects[0].app}
            />
            <Project
                name={projects[1].name}
                src={projects[1].image}
                github={projects[1].github}
                description={projects[1].description}
                technologies={projects[1].technologies}
                app={projects[1].app}
            />
            <Project
                name={projects[2].name}
                src={projects[2].image}
                github={projects[2].github}
                description={projects[2].description}
                technologies={projects[2].technologies}
                app={projects[2].app}
            />
            <Project
                name={projects[3].name}
                src={projects[3].image}
                github={projects[3].github}
                description={projects[3].description}
                technologies={projects[3].technologies}
                app={projects[3].app}
            />
            <Project
                name={projects[4].name}
                src={projects[4].image}
                github={projects[4].github}
                description={projects[4].description}
                technologies={projects[4].technologies}
                app={projects[4].app}
            />
        </div>
    );

}

export default Projects