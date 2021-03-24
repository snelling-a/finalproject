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
                    fluid
                    variant="top"
                    className="mw-100"
                    style={{
                        // width: "100%",
                        // // maxHeight: "100%",
                        objectFit: "cover",
                        overflow: "hidden",
                    }}
                    src={photo && photo}
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
        </Card>
    );
};

export default Homecard;
