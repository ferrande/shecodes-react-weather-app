import React, { useState } from "react";
import WeatherIcon from "../../../WeatherIcon";

function CurrentTemperature({ temperature, description, weatherData }) {
    const [isCelsius, setIsCelsius] = useState(true);

    const toggleUnit = () => {
        setIsCelsius(!isCelsius);
    };

    const toFahrenheit = (celsius) => {
        return (celsius * 9) / 5 + 32;
    };

    const displayTemperature = isCelsius ? Math.round(temperature) : Math.round(toFahrenheit(temperature));

    return (
        <div>
            <div className="current-weather d-flex justify-content-center">
                <WeatherIcon code={weatherData.icon} />
                <span className="current-weather-number align-self-center">{displayTemperature}</span>
                <span
                    id="celsius"
                    className={`metric align-self-center ${isCelsius ? "active" : ""}`}
                    onClick={toggleUnit}
                >
                    ºC
                </span>
                <span className="dot align-self-center">・</span>
                <span
                    id="fahrenheit"
                    className={`metric align-self-center ${!isCelsius ? "active" : ""}`}
                    onClick={toggleUnit}
                >
                    ºF
                </span>
            </div>
            <p className="current-weather-description">{description}</p>
        </div>
    );
}

export default CurrentTemperature;