////////// ////////// //////////
// NOTE Google maps API needed: https://developers.google.com/maps/documentation/maps-static/get-api-key
// Add to .env as: REACT_APP_GOOGLE_KEY='KeyGoesHere'. Make sure it is in gitIgnore
// line 80 picks up that key very time app is built
// can test it by passing the following from parent container (will plot the Bermuda Triangle) - will need to zoon out.
// const polycoords = [
//   { lat: 25.774, lng: -80.19 },
//   { lat: 18.466, lng: -66.118 },
//   { lat: 32.321, lng: -64.757 },
//   { lat: 25.774, lng: -80.19 },
// ];
// line 36 pops off the last object in array of coordinates. Mapy.cz KML->geoJSON->coords array has, for some reason, weirdness in the fianl element.
// should a Czech route place you in the Gulf of Aden...we've been there. Warm water. Switch lat/lng.
////////// ////////// //////////
import React, { useState, useEffect, useContext } from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Polyline,
    Marker,
    InfoWindow,
} from "react-google-maps";
import { GeoAlt } from "react-bootstrap-icons";
import { GoogleContext } from "../Hike";

function Mapper(props) {
    let polycoords = JSON.parse(props.entity.coordinates);

    const apiKeyContext = useContext(GoogleContext);
    const apiKey = apiKeyContext["REACT_APP_GOOGLE_API_KEY"];

    ////////// ////////// ////////// deterine start, end, zero

    function getStart() {
        let start = polycoords[0];
        console.log(start);
        return start;
    }
    function getEnd() {
        const length = polycoords.length;
        let end = polycoords[length - 1];
        console.log(end);
        return end;
    }
    function getZero() {
        let wipLat = [];
        let wipLng = [];

        for (let i = 0; i < polycoords.length; i++) {
            wipLat.push(polycoords[i]["lat"]);
            wipLng.push(polycoords[i]["lng"]);
        }

        console.log(wipLat);
        console.log(wipLng);

        let zero = {
            lat: (Math.min(...wipLat) + Math.max(...wipLat)) / 2,
            lng: (Math.min(...wipLng) + Math.max(...wipLng)) / 2,
        };

        return zero;
    }
    ////////// ////////// ////////// google code
    function Map() {
        return (
            <GoogleMap defaultZoom={11} defaultCenter={getZero()}>
                <Polyline
                    path={polycoords}
                    strokeOpacity={0.8}
                    strokeWeight={2}
                />
                <Marker
                    position={getStart()}
                    icon={{
                        url: "/startGeo.svg",
                        scaledSize: new window.google.maps.Size(30, 30),
                    }}
                />

                <InfoWindow position={getZero()}>
                    <div>zero here</div>
                </InfoWindow>
                <Marker
                    position={getEnd()}
                    icon={{
                        url: "/endGeo.svg",
                        scaledSize: new window.google.maps.Size(30, 30),
                    }}
                />
            </GoogleMap>
        );
    }
    const WrappedMap = withScriptjs(withGoogleMap(Map));
    console.log("google key", process.env.REACT_APP_GOOGLE_KEY);
    console.log(process.env);
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
