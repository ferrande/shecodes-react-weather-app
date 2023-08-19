import React from "react";

import rainy from "../../assets/rainy.png";

function WeatherCard() {
    return (
        <div className="five-day-forecast-card col">
            fri
            <br />
            <img src={rainy} alt="rainy" />
            <br />
            21º
            <span className="highest-temperature">31º</span>
        </div>
    );
}

export default WeatherCard;
