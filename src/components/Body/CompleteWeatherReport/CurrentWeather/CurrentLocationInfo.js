import React, { useState } from "react";

function CurrentLocationInfo() {
    const [currentCity, setCurrentCity] = useState("Sao Paulo");

    return (
        <div>
            <h1 id="currentCity" className="col current-city">
                {currentCity}
            </h1>
            <h2 id="currentDate" className="current-date">
                <span id="currentDay">tue</span> <span id="currentHour">01</span>:
                <span id="currentMinutes">00</span>
            </h2>
        </div>
    )
}

export default CurrentLocationInfo;