import React, { useContext } from "react";
import ReactWeather, { useWeatherBit } from "react-open-weather";
import { WeatherContext } from "../Hike";
import { Container } from "react-bootstrap";

const Weather = (props) => {
    // later want to insert the lat and lng in as props of this
    // custom styling for the display
    const weatherApiKey = useContext(WeatherContext);

    const customStyles = {
        fontFamily: "Helvetica, sans-serif",
        gradientStart: "#0181C2",
        gradientMid: "#04A7F9",
        gradientEnd: "#4BC4F7",
        locationFontColor: "#FFF",
        todayTempFontColor: "#FFF",
        todayDateFontColor: "#B5DEF4",
        todayRangeFontColor: "#B5DEF4",
        todayDescFontColor: "#B5DEF4",
        todayInfoFontColor: "#B5DEF4",
        todayIconColor: "#FFF",
        forecastBackgroundColor: "#FFF",
        forecastSeparatorColor: "#DDD",
        forecastDateColor: "#777",
        forecastDescColor: "#777",
        forecastRangeColor: "#777",
        forecastIconColor: "#4BC4F7",
    };

    const { data, isLoading, errorMessage } = useWeatherBit({
        key: weatherApiKey,

        lat: props.dir.lat,
        lon: props.dir.lng,

        lang: "en",
        unit: "M", // values are (M,S,I)
    });

    return (
        <Container fluid className="px-1">
            <ReactWeather
                theme={customStyles}
                data={data}
                lang="en"
                locationLabel={props.entityName}
                unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                showForecast
            />
        </Container>
    );
};

export default Weather;
