import React from "react";

import rainy from "../../../../assets/rainy.png";

function WeatherCard() {
    return (
        <div className="weather-card col">
            fri
            <br />
            <img src={rainy} alt="rainy" className="weather-card-image" />
            <br />
            21º
            <span className="highest-temperature">31º</span>
        </div>
    );
}

export default WeatherCard;
