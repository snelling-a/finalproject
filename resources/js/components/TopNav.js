import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
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

const TopNav = () => {
    const user = useContext(UserContext);

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
                </Nav>

                <User />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;
