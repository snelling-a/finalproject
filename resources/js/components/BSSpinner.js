import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const BSSpinner = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Spinner
                        animation="border"
                        role="status"
                        style={{ width: "5rem", height: "5rem" }}
                    >
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    );
};

export default BSSpinner;
