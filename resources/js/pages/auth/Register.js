import React, { useState } from "react";
import {
    Button,
    Container,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";

const Register = () => {
    const [validated, setValidated] = useState(false);

    const [
        { email, username, password, password_confirmation },
        setValues,
    ] = useState({
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        /* FROM BOOTSTRAP DOCS */
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     console.log(1);
        // }

        setValidated(true);

        let request_data = { email, username, password, password_confirmation };

        const response = await fetch("/register", {
            method: "POST",
            body: JSON.stringify(request_data),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        const response_data = await response.json();

        if (Math.floor(response.status / 100) == 2) {
            location.href = "/";
        } else if (Math.floor(response.status / 100) == 3) {
            location.href = "/login";
        } else {
            setErrors(response_data.errors);
        }
    };

    const handleChange = (event) => {
        const allowed_names = [
                "username",
                "email",
                "password",
                "password_confirmation",
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };
    return (
        <Container className="d-flex flex-column align-items-center flex-nowrap">
            <Form.Label className="form-control-lg text-center">
                Register an account to submit new destinations, leave ratings
                and save your favorite destinations!
            </Form.Label>
            <Form
                noValidate
                validated={validated}
                action="/register"
                method="post"
                onSubmit={handleSubmit}
                className=" w-50"
            >
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>🌄</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            // id="inlineFormInputGroup"
                            // placeholder="HikeCzech"
                            type="text"
                            value={username}
                            name="username"
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        // placeholder="name@example.com"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide an email.
                    </Form.Control.Feedback>
                </Form.Group>
                <>
                    <Form.Label /* htmlFor="inputPassword5" */>
                        Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        // id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        // pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,20}$"
                    />
                    <Form.Text /* id="passwordHelpBlock" */ muted>
                        Your password must be 8-20 characters long, contain
                        letters and numbers, and must not contain spaces,
                        special characters, or emoji.
                    </Form.Text>
                </>
                <Form.Group /* controlId="formBasicPassword" */>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        // placeholder="Confirm Password"
                        value={password_confirmation}
                        name="password_confirmation"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Register;
