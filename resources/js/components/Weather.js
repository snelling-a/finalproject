import React, { useContext } from "react";
import ReactWeather, { useWeatherBit } from "react-open-weather";
import { WeatherContext } from "../Hike";

const Weather = () => {
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

        // these to be changed by props later
        lat: "50.0755",
        lon: "14.4378",

        lang: "en",
        unit: "M", // values are (M,S,I)
    });

    return (
        <div className="w-100 h-75">
            <ReactWeather
                theme={customStyles}
                data={data}
                lang="en"
                locationLabel="Prague"
                unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                showForecast
            />
        </div>
    );
};

export default Weather;
