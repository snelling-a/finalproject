////////// ////////// //////////
// NOTE Google maps API needed: https://developers.google.com/maps/documentation/maps-static/get-api-key
// Add to .env as: REACT_APP_GOOGLE_KEY='KeyGoesHere'. Make sure it is in gitIgnore
// line 80 picks up that key very time app is built

import React, { useState, useEffect, useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    // Polyline,
    Marker,
    InfoWindow,
} from "react-google-maps";
import boots from "./img/boots.svg";

import { GoogleContext } from "../Hike";

function BigMap(props) {
    const apiKeyContext = useContext(GoogleContext);
    const apiKey = apiKeyContext["REACT_APP_GOOGLE_API_KEY"];

    let points = props.points;

    // function getPoints() {
    //     return points;
    // }

    ////////// ////////// ////////// google code

    function Map() {
        const [selectedPoint, setSelectedPoint] = useState(null);

        // let pts = getPoints();

        return (
            <GoogleMap
                defaultZoom={7}
                defaultCenter={{ lat: 49.81, lng: 15.47 }}
            >
                {points &&
                    points.map((point, index) => (
                        <Marker
                            key={index}
                            position={JSON.parse(point.coordinates)[0]}
                            onClick={() => {
                                setSelectedPoint(point);
                            }}
                            icon={{
                                url: boots,
                                scaledSize: new window.google.maps.Size(30, 30),
                            }}
                        />
                    ))}

                {selectedPoint && (
                    <InfoWindow
                        position={JSON.parse(selectedPoint.coordinates)[0]}
                        onCloseClick={() => {
                            setSelectedPoint(null);
                        }}
                    >
                        <div>
                            Name: {selectedPoint.name} <br />
                            Description: {selectedPoint.description} <br />
                            <LinkContainer to={"/details/" + selectedPoint.id}>
                                <Button variant="success">Find out more</Button>
                            </LinkContainer>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <>
            <div className="Mapper" style={{ width: "100%", height: "60vh" }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </>
    );
}
export default BigMap;
