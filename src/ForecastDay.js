import React from "react";

import rainy from "./assets/rainy.png";

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
