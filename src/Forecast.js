import React, { useState } from "react";

import SearchForm from "./SearchForm";
import FiveDaysForecast from "./FiveDaysForecast";

import fewClouds from "./assets/few-clouds.png";

function Forecast() {
  const [currentCity, setCurrentCity] = useState("Sao Paulo");
  const [temperature, setTemperature] = useState(21);

  function handleCitySearch(city, temperature) {
    setCurrentCity(city);
    setTemperature(11);
  }

  // useEffect(() => {
  //   setTemperature(11);
  // }, [currentCity]);

  return (
    <div className="container">
      <div className="row">
        <h1 id="currentCity" className="col current-city">
          {currentCity}
        </h1>
        <SearchForm handleSearch={handleCitySearch} />
      </div>
      <h2 id="currentDate" className="current-date">
        <span id="currentDay">tue</span> <span id="currentHour">01</span>:
        <span id="currentMinutes">00</span>
      </h2>
      <div className="modal-body row">
        <div className="col-md-8">
          <p className="current-weather">
            <img
              src={fewClouds}
              alt="rainy"
              className="current-weather-image"
              id="icon"
            />
            <span id="weatherNumber" className="current-weather-number">
              {temperature}
            </span>
            <span id="celsius" className="metric">
              ºC
            </span>
            <span className="dot">・</span>
            <span id="fahrenheit" className="metric">
              ºF
            </span>
          </p>
          <p id="currentWeatherDescription">partly cloudy</p>
        </div>
        <div className="col-md-4">
          <p className="wind-humidity">
            <ul>
              <li>
                wind: <span id="wind"></span> km/h
              </li>
              <li>
                humidity: <span id="humidity"></span>%
              </li>
            </ul>
          </p>
        </div>
      </div>
      <FiveDaysForecast />
    </div>
  );
}

export default Forecast;
