import React, { useState } from "react";

function CurrentLocationInfo() {
    const [currentCity, setCurrentCity] = useState("Nagoya");

    return (
        <div>
            <h1>
                {currentCity}
            </h1>
            <h2>
                <span id="currentDay">tue</span> <span id="currentHour">01</span>:
                <span id="currentMinutes">00</span>
            </h2>
        </div>
    )
}

export default CurrentLocationInfo;