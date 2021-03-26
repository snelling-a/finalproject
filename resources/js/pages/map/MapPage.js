import { Container, Image, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import React, { useState, useEffect } from "react";
import { data } from "jquery";
import BigMap from "../../components/BigMap";

const MapPage = () => {
    // state section
    const [points, setPoints] = useState(null);

    // Fetch entity data
    async function fetchEntities() {
        const url = "/api/entity/fetch";
        const response = await fetch(url);

        const data = await response.json();

        setPoints(listPoints(data));
    }

    function listPoints(data) {
        return data.map((e) => e);
    }

    useEffect(() => {
        fetchEntities();
    }, []);

    return (
        <Container fluid className="px-0">
            <Container fluid className="px-0">
                <BigMap points={points} />
            </Container>
        </Container>
    );
};

export default MapPage;
