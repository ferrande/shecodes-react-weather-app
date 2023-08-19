import React from "react";
import WeatherCard from "./WeatherCard";

function FiveDaysForecast() {
    return (
        <div className="row five-day-forecasts">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    );
}

export default FiveDaysForecast;
