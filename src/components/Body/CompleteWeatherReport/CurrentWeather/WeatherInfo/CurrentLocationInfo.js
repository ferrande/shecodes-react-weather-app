import React from "react";

import FormattedDate from "./FormattedDate/FormattedDate";

function CurrentLocationInfo({ city, weatherData }) {
    return (
        <div>
            <h1>
                {city}
            </h1>
            <FormattedDate date={weatherData.date} />
        </div>
    )
}

export default CurrentLocationInfo;