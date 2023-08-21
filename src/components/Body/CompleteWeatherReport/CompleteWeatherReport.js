import React from "react";

import FiveDaysForecast from "./FiveDaysForecast/FiveDaysForecast";
import CurrentWeather from "./CurrentWeather/CurrentWeather";

function CompleteWeatherReport() {
  return (
    <div>
      <CurrentWeather defaultCity="Sydney" />
      <FiveDaysForecast />
    </div>
  );
}

export default CompleteWeatherReport;
