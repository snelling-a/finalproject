import {
    Container,
    Row,
    Image,
    Col,
    Button,
    Card,
    Tabs,
    Tab,
    OverlayTrigger,
} from "react-bootstrap";
import { Heart, HeartFill, MapFill } from "react-bootstrap-icons";
import Popover from "react-bootstrap/Popover";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Weather from "../../components/Weather";
import Comment from "../../components/Comment";
import { UserContext } from "../../Hike";
import Admin from "../../components/Admin";
import Moment from "react-moment";
import Mapper from "../../components/Mapper";
import BSSpinner from "../../components/BSSpinner";

const EntityDetails = () => {
    const user = useContext(UserContext);
    // state section
    const [entity, setEntity] = useState(null);
    const [favorite, setFavorite] = useState(0);
    const [dir, setDir] = useState(null);
    let { id } = useParams();

    console.log(user);

    // Fetch entity data
    async function fetchEntity() {
        const url = `/api/details/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setEntity(data);

        if (data.favorites.length) {
            setFavorite(1);
        } else {
            setFavorite(0);
        }

        let coords = JSON.parse(data.coordinates)[0];
        setDir(coords);
    }

    useEffect(() => {
        fetchEntity();
    }, []);

    const popOver = (
        <Popover id="popover-basic">
            <Popover.Content>Please register to add favorites!</Popover.Content>
        </Popover>
    );
    async function handleFavorite() {
        const url = `/api/favorite/update/${id}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });

        const data = await response.json();
        data.status == "created" ? setFavorite(1) : setFavorite(0);
    }

    const firstToUpper = (str) => str[0].toUpperCase() + str.substring(1);

    const content = !entity ? (
        <BSSpinner />
    ) : (
        <Container className="px-1">
            <Row>
                <Mapper entity={entity} />
            </Row>
            <Row className="d-flex justify-content-around mt-1">
                {dir && (
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.google.com/maps/dir/Current+Location/${dir.lat},${dir.lng}`}
                    >
                        <Button variant="outline-success">
                            <MapFill /> Directions
                        </Button>
                    </a>
                )}

                {user ? (
                    <Button variant="outline-danger" onClick={handleFavorite}>
                        {favorite === 1 ? <HeartFill /> : <Heart />} Favorite
                    </Button>
                ) : (
                    <OverlayTrigger
                        trigger="click"
                        placement="top"
                        overlay={popOver}
                    >
                        <Button variant="outline-danger">
                            <Heart /> Favorite
                        </Button>
                    </OverlayTrigger>
                )}
                <Admin entity={entity} type={"entity"} />
            </Row>
            <Card body className="text-center my-2">
                <h2>{firstToUpper(entity.name)}</h2>
            </Card>
            <Tabs
                defaultActiveKey="weather"
                id="uncontrolled-tab-example"
                className="text-center my-2 px-1"
            >
                <Tab eventKey="weather" title="Weather Forecast">
                    {dir && (
                        <Weather
                            dir={dir}
                            entityName={firstToUpper(entity.name)}
                        />
                    )}
                </Tab>

                <Tab eventKey="desc" title="Description">
                    <div className="px-2">{entity.description}</div>
                </Tab>

                <Tab eventKey="reviews" title="Reviews">
                    <Container className="px-0">
                        {/*                     
                        <Row>
                            <Col>
                                <h3>Username</h3>
                            </Col>
                            <Col sm={8}>
                                <h3>Review</h3>
                            </Col>
                        </Row> */}
                        {entity.comments &&
                            entity.comments.map((comment) => (
                                <Row
                                    key={comment.id}
                                    className="my-1 px-0 mx-0 "
                                >
                                    <Row
                                        className=" px-2 mx-0 d-flex justify-content-between w-100 text-muted"
                                        fluid
                                    >
                                        <span>{comment.user.username}</span>
                                        <span>
                                            <Moment fromNow ago>
                                                {comment.created_at}
                                            </Moment>{" "}
                                            ago
                                        </span>
                                    </Row>
                                    <Row xs={4} className="px-2 mx-0 ">
                                        {comment.comment}{" "}
                                    </Row>
                                    <Admin comment={comment} type={"comment"} />
                                </Row>
                            ))}
                    </Container>

                    <Comment id={id} className="mb-1" />
                </Tab>

                <Tab eventKey="gallery" title="Gallery">
                    <Container>
                        <Row xs={1} md={2} className="px-2">
                            <Image src={entity.photo} rounded />
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </Container>
    );

    return <>{content}</>;
};

export default EntityDetails;
