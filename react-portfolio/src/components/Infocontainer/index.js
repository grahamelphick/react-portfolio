import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css"

function InfoContainer(props) {
    return (
        <Container>
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                    <Container style={{ marginTop: 30, backgroundColor: "white", padding: 20 }}>
                        <Row>
                            <Col size="md-2"></Col>
                            <Col size="md-12" backgroundColor={"white"} padding={"10px"}>
                                <h1>{props.pageTitle}</h1>
                                <hr></hr>
                                <div>{props.information}</div>
                            </Col>
                            <Col size="md-2"></Col>
                        </Row>
                    </Container>
                </Col>
                <Col size="md-2"></Col>
            </Row>
        </Container>

    )
}

export default InfoContainer;
