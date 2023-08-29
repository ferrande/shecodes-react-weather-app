import React from "react";

import WeatherIcon from "../../../WeatherIcon";

function CurrentTemperature({ temperature, description, weatherData }) {
    return (
        <div>
            <div className="current-weather d-flex justify-content-center">
                <WeatherIcon code={weatherData.icon} />
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