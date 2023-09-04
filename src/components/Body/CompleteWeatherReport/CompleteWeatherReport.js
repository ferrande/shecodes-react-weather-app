import React, { useState } from "react";

import SearchForm from "./SearchForm/SearchForm";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
// import FiveDaysForecast from "./FiveDaysForecast/FiveDaysForecast";

function CompleteWeatherReport() {
  const [selectedCity, setSelectedCity] = useState("Sydney");

  function handleCitySearch(newCity) {
    setSelectedCity(newCity);
  }

  return (
    <div>
      <SearchForm handleSearch={handleCitySearch} />
      <CurrentWeather city={selectedCity} />
      {/* <FiveDaysForecast /> */}
    </div>
  );
}

export default CompleteWeatherReport;
