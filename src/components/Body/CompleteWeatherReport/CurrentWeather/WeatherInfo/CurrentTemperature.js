import React from "react";

import fewClouds from "../../../../../assets/few-clouds.png";

function CurrentTemperature({ temperature, description }) {
    return (
        <div>
            <div className="current-weather d-flex justify-content-center">
                <img
                    src={fewClouds}
                    alt={description}
                    className="current-weather-image align-self-center"
                    id="icon"
                />
                <span className="current-weather-number align-self-center">
                    {Math.round(temperature)}
                </span>
                <span id="celsius" className="metric align-self-center">
                    ºC
                </span>
                <span className="dot align-self-center">・</span>
                <span id="fahrenheit" className="metric align-self-center">
                    ºF
                </span>
            </div>
            <p className="current-weather-description">{description}</p>
        </div>
    )
}

export default CurrentTemperature;