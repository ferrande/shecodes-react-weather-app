import React, { useState } from "react";

import fewClouds from "../../assets/few-clouds.png";

function CurrentTemperature() {
    const [temperature, setTemperature] = useState(21);

    return (
        <div className="col-md-8">
            <p className="current-weather">
                <img
                    src={fewClouds}
                    alt="rainy"
                    className="current-weather-image"
                    id="icon"
                />
                <span id="weatherNumber" className="current-weather-number">
                    {temperature}
                </span>
                <span id="celsius" className="metric">
                    ºC
                </span>
                <span className="dot">・</span>
                <span id="fahrenheit" className="metric">
                    ºF
                </span>
            </p>
            <p id="currentWeatherDescription">partly cloudy</p>
        </div>
    )
}

export default CurrentTemperature;