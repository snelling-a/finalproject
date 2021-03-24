import React, { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Hike";

const Comment = (props) => {
    const user = useContext(UserContext);
    const { id } = props;
    const [comment, setComment] = useState("");

    // const [errors, setErrors] = useState(null);
    // const [data, setData] = useState(null);

    /**
     * added event as arument for handleSubmit
     * moved .preventDefault() here
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        let user_id = user.id;
        let entity_id = id;

        let request_data = { comment, user_id, entity_id };

        const response = await fetch("/api/comment/store", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: JSON.stringify(request_data),
        });

        // Redirect after submit
        console.log("success, redirecting");
        location.href = `/details/${id}`;
    };

    const handleChange = (event) => {
        /**
         * simplified logic
         */

        setComment(event.target.value);
        // const allowed_names = ["comment"],
        //     name = event.target.name,
        //     value = event.target.value;

        // if (-1 !== allowed_names.indexOf(name)) {
        //     setValues((prev_values) => {

        //         return { ...prev_values, [name]: value };
        //     });
        // }
    };
    const content = user ? (
        <>
            <Form method="post" onSubmit={handleSubmit}>
                <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        as="textarea"
                        value={comment}
                        onChange={handleChange}
                        name="comment"
                    />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                    Max 255 characters.
                </Form.Control.Feedback>
                <Button
                    variant="primary"
                    type="submit"
                    overlay={
                        <Alert
                            title={"Wait a second"}
                            content={"you must be logged in to leave a comment"}
                        />
                    }
                >
                    Submit
                </Button>
            </Form>
        </>
    ) : (
        <Alert variant="danger">
            <Alert.Heading>Wait a minute</Alert.Heading>
            <p>
                You must be registered and logged in to post comments on routes
            </p>
            <hr />
            <p className="mb-0">
                <Link to="/register">Register</Link> |{" "}
                <Link to="/login">Login</Link>
            </p>
        </Alert>
    );
    return <>{content}</>;
};

export default Comment;
