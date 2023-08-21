import React from "react";

function CurrentLocationInfo({ city }) {
    return (
        <div>
            <h1>
                {city}
            </h1>
            <h2>
                <span id="currentDay">tue</span> <span id="currentHour">01</span>:
                <span id="currentMinutes">00</span>
            </h2>
        </div>
    )
}

export default CurrentLocationInfo;