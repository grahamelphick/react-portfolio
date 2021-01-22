import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Resume from "../../assets/graham-elphick-resume.pdf"

function ContactMe() {
    return (
        <Container>
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

                        <a href={Resume} target="_blank">RESUME</a>

                        <br></br><br></br>

                        <a href="https://www.linkedin.com/in/graham-elphick-22a352149/" target="_blank">LINKEDIN</a>

                        <br></br><br></br>

                        <a href="https://www.facebook.com/graham.elphick" target="_blank">FACEBOOK</a>
                    </p>
                </Col>
            </Row>
        </Container>

    )
}

export default ContactMe