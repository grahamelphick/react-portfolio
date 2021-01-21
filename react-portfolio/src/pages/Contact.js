import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import "./Contact.css"

function Contact() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-12 col-md-8" style={{ backgroundColor: "white", padding: 10 }}>
                        <Row>
                            <Col size="md-12">
                                <h1>Contact</h1>
                                <hr></hr>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                        <p>
                            graham.m.elphick@gmail.com
                        <br></br>
                            0408 937 005
                        </p>
                    </Col>
                    <Col size="md-8">
                        <p>
                            <a href="https://github.com/grahamelphick" target="_blank">GITHUB</a>

                            <br></br><br></br>

                            <a href="assets/graham-elphick-resume.pdf" target="_blank">RESUME</a>

                            <br></br><br></br>

                            <a href="https://www.linkedin.com/in/graham-elphick-22a352149/" target="_blank">LINKEDIN</a>

                            <br></br><br></br>

                            <a href="https://www.facebook.com/graham.elphick" target="_blank">FACEBOOK</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
