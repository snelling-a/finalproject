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
        // console.log(data);
        setPoints(listPoints(data));
    }

    function listPoints(data) {
        // return data.map(e =>
        //     JSON.parse(e.coordinates)[0]
        //     );
        return data.map((e) => e);
    }

    useEffect(() => {
        fetchEntities();
    }, []);

    /**
     * what does this do?
     */

    // useEffect(() => {
    //     // console.log(points);
    // }, [points]);

    return (
        <Container fluid>
            <h1>Map Page</h1>
            <Container fluid>
                <BigMap points={points} />

                <Container fluid>
                    <h5 className="pt-2">Filter by type</h5>

                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item
                            action
                            href="#link1"
                            className="p-2 mw-25"
                        >
                            All
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" className="p-2">
                            Trails
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" className="p-2">
                            Destinations
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
            </Container>
        </Container>
    );
};

export default MapPage;
