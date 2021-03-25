import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Homecard = (props) => {
    const { name, photo, region, description, id } = props.data;

    return (
        <Card className="my-3 shadow w-100 h-100">
            <Card.Body className="d-flex flex-column justify-content-around">
                <Card.Title className="">{name}</Card.Title>

                <Card.Img
                    variant="top"
                    src={photo && photo}
                    style={{ maxHeight: "100%", overflow: "hidden", flex: 1 }}
                />

                <Card.Text className="p-1">{description}</Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item className="py-2 px-1">
                        Region: {region}
                    </ListGroup.Item>
                    <ListGroup.Item className="py-2 px-1">
                        Difficulty: 4/5
                    </ListGroup.Item>
                    <ListGroup.Item className="py-2 px-1">
                        Rating: 5/5
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>

            <LinkContainer to={"/details/" + id}>
                <Button variant="success">Find out more</Button>
            </LinkContainer>
            {/* <Button variant="primary">Find out more</Button> */}
        </Card>
    );
};

export default Homecard;
