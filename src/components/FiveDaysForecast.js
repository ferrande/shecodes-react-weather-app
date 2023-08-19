import React from "react";
import ForecastDay from "./ForecastDay";

function FiveDaysForecast() {
    return (
        <div className="row five-day-forecasts">
            <ForecastDay />
            <ForecastDay />
            <ForecastDay />
            <ForecastDay />
            <ForecastDay />
        </div>
    );
}

export default FiveDaysForecast;
