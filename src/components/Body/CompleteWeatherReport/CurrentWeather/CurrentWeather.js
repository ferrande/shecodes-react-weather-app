import React from "react";

import CurrentLocationInfo from "./CurrentLocationInfo";
import CurrentTemperature from "./CurrentTemperature";
import CurrentStats from "./CurrentStats";

function CurrentWeather() {
    return (
        <div>
            <CurrentLocationInfo />
            <CurrentTemperature />
            <CurrentStats />
        </div>
    )
}

export default CurrentWeather;