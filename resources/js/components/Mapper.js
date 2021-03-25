// Add to .env as: REACT_APP_GOOGLE_KEY='KeyGoesHere'. Make sure it is in gitIgnore

import React, { useState, useEffect, useContext } from "react";
import { GoogleContext } from "../Hike";

//maps
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Polyline,
    Marker,
    InfoWindow,
} from "react-google-maps";

//lat-lng distance calc (dependency)
const { greatCircleDistance } = require("great-circle-distance");

//images
import start from "./img/start.svg";
import beer from "./img/beer.svg";

function Mapper(props) {
    let polycoords = JSON.parse(props.entity.coordinates);

    const apiKey = useContext(GoogleContext);

    // helper functions

    const coords = {
        lat1: "12.9611159",
        lng1: "77.6362214",
        lat2: "12.9611159",
        lng2: "75.6362214",
    };

    function isStartEnd() {
        const coords = {
            lat1: getStart().lat,
            lng1: getStart().lng,
            lat2: getEnd().lat,
            lng2: getEnd().lng,
        };
        if (greatCircleDistance(coords) < 0.2) return true;
        return false;
    }

    function getStart() {
        let start = polycoords[0];

        return start;
    }
    function getEnd() {
        const length = polycoords.length;
        let end = polycoords[length - 1];

        return end;
    }
    function getZero() {
        let wipLat = [];
        let wipLng = [];

        for (let i = 0; i < polycoords.length; i++) {
            wipLat.push(polycoords[i]["lat"]);
            wipLng.push(polycoords[i]["lng"]);
        }

        let zero = {
            lat: (Math.min(...wipLat) + Math.max(...wipLat)) / 2,
            lng: (Math.min(...wipLng) + Math.max(...wipLng)) / 2,
        };

        return zero;
    }

    // google react maps

    function Map() {
        return (
            <GoogleMap
                defaultZoom={11}
                defaultCenter={getZero()}
                mapTypeId={"terrain"}
            >
                <Polyline
                    path={polycoords}
                    geodesic={true}
                    options={{
                        strokeColor: "#8f4ad3",
                        strokeOpacity: 0.75,
                        strokeWeight: 3,
                    }}
                />
                <Marker
                    position={getStart()}
                    icon={{
                        url: start,
                        scaledSize: new window.google.maps.Size(30, 30),
                    }}
                />

                {!isStartEnd && (
                    <Marker
                        position={getEnd()}
                        icon={{
                            url: beer,
                            scaledSize: new window.google.maps.Size(30, 30),
                        }}
                    />
                )}
            </GoogleMap>
        );
    }
    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <>
            <div className="Mapper" style={{ width: "100%", height: "40vh" }}>
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
export default Mapper;
