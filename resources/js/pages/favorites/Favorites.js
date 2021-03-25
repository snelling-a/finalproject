import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { UserContext } from "../../Hike";

function Favorites() {
    // const user = useContext(UserContext);
    const [favorites, setFavorites] = useState(null);
    async function fetchFavorites() {
        const url = `/api/my_favorites`;
        const response = await fetch(url);
        const data = await response.json();

        setFavorites(data);
    }

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <Container fluid>
            <h2>My favorites</h2>
            <Row xs={1} md={2} lg={4}>
                {favorites &&
                    favorites.map((favorite, i) => (
                        <Card
                            style={{ width: "20rem" }}
                            key={i}
                            className="d-flex flex-column justify-content-between m-1"
                        >
                            <Card.Img variant="top" src={favorite.photo} />
                            <Card.Body>
                                <Card.Title>{favorite.name}</Card.Title>
                                <Card.Text>{favorite.description}</Card.Text>
                                <LinkContainer
                                    to={"/details/" + favorite.pivot.entity_id}
                                >
                                    <Button variant="primary">Details</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    ))}
            </Row>
        </Container>
    );
}

export default Favorites;
