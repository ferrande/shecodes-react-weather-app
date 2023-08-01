import React from "react";
import ForecastDay from "./ForecastDay";

import brokenClouds from "./assets/broken-clouds.png";
import clear from "./assets/clear.png";
import fewClouds from "./assets/few-clouds.png";
import mist from "./assets/mist.png";
import rainy from "./assets/rainy.png";
import scatteredClouds from "./assets/scattered-clouds.png";
import showerRain from "./assets/shower-rain.png";
import snow from "./assets/snow.png";
import thunderstorm from "./assets/thunderstorm.png";

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
