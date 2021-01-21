import React from "react";
import Infocontainer from "../components/Infocontainer";
import ProjectsMe from "../components/Projectsme"

function Projects() {
    return (
        <div>
            <Infocontainer
                pageTitle={"Projects"}
                information={<ProjectsMe/>}
            />
        </div>
    );

}

export default Projects