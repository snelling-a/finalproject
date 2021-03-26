import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";

const Homecard = (props) => {
    console.log("file: Homecard.js  line 6  Homecard  props", props);
    const {
        photo,
        id,
        name,
        description,
        region,
        category,
        rating,
    } = props.data;

    const firstToUpper = (str) => str[0].toUpperCase() + str.substring(1);

    return (
        <Card className="my-3 shadow w-100 h-100">
            <Card.Body className="d-flex flex-column justify-content-around">
                <Card.Title className="">{firstToUpper(name)}</Card.Title>

                <Card.Img
                    variant="top"
                    src={photo && photo}
                    style={{ maxHeight: "100%", overflow: "hidden", flex: 1 }}
                />

                <Card.Text className="p-1">
                    {firstToUpper(description)}
                </Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item className="py-2 px-1">
                        {region && `Region: ${firstToUpper(region)}`}
                    </ListGroup.Item>
                    <ListGroup.Item className="py-2 px-1">
                        {category && `Category: ${firstToUpper(category)}`}
                    </ListGroup.Item>
                    <ListGroup.Item className="py-2 px-1">
                        {rating && `Rating: ${rating}/5`}{" "}
                        <StarFill className="text-warning mb-1" />
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
