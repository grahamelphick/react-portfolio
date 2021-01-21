import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./About.css"

function About() {
    return (
        <div>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-12 col-md-8" style={{ backgroundColor: "white", padding: 10 }}>
                        <Row>
                            <Col size="md-12">
                                <h1>About Me</h1>
                                <hr></hr>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            I am a full-stack web developer with a background in communications and am always looking for a new challenge. Through
                            earning a Bachelor’s degree from Edith Cowan University and a certificate from the Coding Bootcamp at the University of
                            Western Australia, I have learned to be disciplined and hard-working. The Bootcamp provided me with the technical
                            knowledge to create stylish, fully functional web applications using JavaScript, SQL and React. Prior to my web
                            development career, I have worked on projects for a company and interacted one-on-one with clients. These processes gave
                            me valuable insight and skills regarding creative services (which I strongly believe can be transferable to web
                            development). I have completed over twenty coding projects (available on GitHub) and worked successfully on my own and
                            in a collaborative environment. I am an asset to any company, from web development to presentation to client
                            communication. I’m excited to develop my skills further and build exciting products as I thrive on creativity and
                            problem-solving.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4"></Col>
                    <Col size="md-4">
                        <h2>Proficiencies:</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>Node.js</li>
                            <li>SQL</li>
                        </ul>
                    </Col>
                    <Col size="md-4"></Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
