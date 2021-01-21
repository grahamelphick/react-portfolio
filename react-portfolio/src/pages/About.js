import React from "react";
import InfoContainer from "../components/Infocontainer";
import AboutMe from "../components/Aboutme"
import "./About.css"

function About() {
    return (
        <div>
            <InfoContainer
                pageTitle={"About Me"}
                information={<AboutMe />}
            />
            
        </div>
    );
}

export default About;
