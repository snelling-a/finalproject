import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import { UserContext } from "../../Hike";

function Favorites() {
    const user = useContext(UserContext);
    const [favorites, setFavorites] = useState(null);
    async function fetchFavorites() {
        // let id = user;
        console.log(user);
        const url = `/api/my_favorites`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFavorites(data);
    }

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <Container fluid>
            <h2>My favorites</h2>
            <Row xs={2} md={4} lg={6}>
                {favorites &&
                    favorites.map((favorite, i) => (
                        <Card style={{ width: "18rem" }} key={i}>
                            <Card.Img variant="top" src={favorite.photo} />
                            <Card.Body>
                                <Card.Title>{favorite.name}</Card.Title>
                                <Card.Text>{favorite.description}</Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    ))}
            </Row>
        </Container>
    );
}

export default Favorites;
