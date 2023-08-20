import React from "react";

import WeatherCard from "./WeatherCard";

function FiveDaysForecast() {
    return (
        <div className="row five-days-forecast">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    );
}

export default FiveDaysForecast;
