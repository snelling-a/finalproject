import React, { useState, useEffect, useContext } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Car from "./Car";
import Homecard from "./Homecard";
import ScrollToTop from "react-scroll-up";
import { ArrowUpCircle } from "react-bootstrap-icons";

import GoogleContext from "../../Hike";
import SearchContext from "../../Hike";

const Home = (props) => {
    const value = useContext(GoogleContext);
<<<<<<< HEAD
    const search = useContext(SearchContext);
=======
>>>>>>> d6f116fa8434a96cbfed89bc736d4993e89b9d59

    // state section
    const [entities, setEntities] = useState({});

    // Fetch entity data
    async function fetchEntities() {
        const url = "/api/entity/fetch";
        const response = await fetch(url);
        const data = await response.json();
        setEntities(data);
    }

    useEffect(() => {
        fetchEntities();
    }, []);

    return (
        <Container className="bg-light pb-2 my-2">
            <Car />
            <Container>
                {search && <div>Search context loaded</div>}
                <Row xs={1} md={2}>
                    {" "}
                    {entities.length > 0
                        ? entities.map((i) => (
                              <Col key={i.id} className="p-2">
                                  <Homecard data={i} />{" "}
                              </Col>
                          ))
                        : null}
                </Row>
            </Container>
            <ScrollToTop
                showUnder={160}
                style={{
                    position: "fixed",
                    bottom: 30,
                    right: 15,
                    cursor: "pointer",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "linear",
                    transitionDelay: "0s",
                }}
            >
                <span>
                    <ArrowUpCircle
                        className="text-dark"
                        width="32"
                        height="32"
                    />
                </span>
            </ScrollToTop>
        </Container>
    );
};

export default Home;
