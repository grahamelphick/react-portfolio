import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import rainScreenshot from "../assets/rainorshine-screenshot1.png"
import wishlistScreenshot from "../assets/wishlist-screenshot1.png"
import burgerScreenshot from "../assets/eat-da-burger-screenshot1.png"
import passwordScreenshot from "../assets/passwordgenerator-screenshot1.png"
import schedulerScreenshot from "../assets/workdayplanner-screenshot1.png"

function Projects() {
    return (
        <div>
            <Project
                name={projects[0].name}
                image={rainScreenshot}
                github={projects[0].github}
                description={projects[0].description}
                technologies={projects[0].technologies}
                app={projects[0].app}
            />
            <Project
                name={projects[1].name}
                image={wishlistScreenshot}
                github={projects[1].github}
                description={projects[1].description}
                technologies={projects[1].technologies}
                app={projects[1].app}
            />
            <Project
                name={projects[2].name}
                image={burgerScreenshot}
                github={projects[2].github}
                description={projects[2].description}
                technologies={projects[2].technologies}
                app={projects[2].app}
            />
            <Project
                name={projects[3].name}
                image={passwordScreenshot}
                github={projects[3].github}
                description={projects[3].description}
                technologies={projects[3].technologies}
                app={projects[3].app}
            />
            <Project
                name={projects[4].name}
                image={schedulerScreenshot}
                github={projects[4].github}
                description={projects[4].description}
                technologies={projects[4].technologies}
                app={projects[4].app}
            />
        </div>
    );

}

export default Projects