import React from "react";

import brokenClouds from "./assets/broken-clouds.png";
import clear from "./assets/clear.png";
import fewClouds from "./assets/few-clouds.png";
import mist from "./assets/mist.png";
import rainy from "./assets/rainy.png";
import scatteredClouds from "./assets/scattered-clouds.png";
import showerRain from "./assets/shower-rain.png";
import snow from "./assets/snow.png";
import thunderstorm from "./assets/thunderstorm.png";

function ForecastDay() {
    return (
        <p className="five-day-forecast col">
            fri
            <br />
            <img src={rainy} alt="rainy" />
            <br />
            21º
            <span className="highest-temperature">31º</span>
        </p>
    );
}

export default ForecastDay;
