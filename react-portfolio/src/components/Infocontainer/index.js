import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function InfoContainer(props) {
    return (
        <Container style={{ marginTop: 30, backgroundColor: "white" }}>
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

    )
}

export default InfoContainer;
