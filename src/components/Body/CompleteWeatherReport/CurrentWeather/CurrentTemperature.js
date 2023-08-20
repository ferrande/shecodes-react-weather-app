import React, { useState } from "react";

import fewClouds from "../../../../assets/few-clouds.png";

function CurrentTemperature() {
    const [temperature, setTemperature] = useState(21);

    return (
        <div>
            <div className="current-weather d-flex justify-content-center">
                <img
                    src={fewClouds}
                    alt="rainy"
                    className="current-weather-image align-self-center"
                    id="icon"
                />
                <span className="current-weather-number align-self-center">
                    {temperature}
                </span>
                <span id="celsius" className="metric align-self-center">
                    ºC
                </span>
                <span className="dot align-self-center">・</span>
                <span id="fahrenheit" className="metric align-self-center">
                    ºF
                </span>
            </div>
            <p className="current-weather-description">partly cloudy</p>
        </div>
    )
}

export default CurrentTemperature;