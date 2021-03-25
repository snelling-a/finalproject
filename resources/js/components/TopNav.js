import React, { useContext, useState, createContext } from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../Hike";
import Logout from "../pages/auth/Logout";

function User() {
    const user = useContext(UserContext);

    if (user) {
        return (
            <>
                <Nav.Link disabled>Hello, {user && user.username}</Nav.Link>
                <LinkContainer to={""}>
                    <Nav.Link>
                        <Logout />
                    </Nav.Link>
                </LinkContainer>
            </>
        );
    }

    return (
        <>
            <LinkContainer to={"/login"}>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/register"}>
                <Nav.Link>Register</Nav.Link>
            </LinkContainer>
        </>
    );
}

const TopNav = (props) => {
    const user = useContext(UserContext);

    const [items, setItems] = useState(null);
    const [query, setQuery] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function searchEntities(event) {
        event.preventDefault();

        const url = `/api/entity/search/${query}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setItems(data);
        setIsLoading(false);
        search(data);
        // console.log(items);
    }

    const handleChange = (event) => {
        // let value = event.target.value;
        // console.log(value);
        // setQuery(value);
        props.search(event.target.value);
    };

    console.log(props.search);

    return (
        <Navbar collapseOnSelect bg="white" expand="lg" fixed="top">
            <Navbar.Brand
                href="/"
                className="text-success
			"
            >
                HikeCzech
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to={"/map"}>
                        <Nav.Link>Map</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to={"/submit"}>
                        <Nav.Link>Contribute</Nav.Link>
                    </LinkContainer>
                    {user ? (
                        <LinkContainer to={"/favs"}>
                            <Nav.Link>Favorites</Nav.Link>
                        </LinkContainer>
                    ) : null}
                    <Form inline onSubmit={searchEntities}>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            name="search"
                            onChange={handleChange}
                            // onchange={(e) => { onchange(e) }}
                        />
                        <Button type="submit" variant="outline-success">
                            Search
                        </Button>
                    </Form>
                </Nav>

                <User />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;
