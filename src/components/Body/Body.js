import React, { useState } from "react";

import SearchForm from "./SearchForm/SearchForm";
import CompleteWeatherReport from "./CompleteWeatherReport/CompleteWeatherReport";

function Body() {
    const [currentCity, setCurrentCity] = useState("Sao Paulo");
    const [temperature, setTemperature] = useState(21);

    function handleCitySearch(city, temperature) {
        setCurrentCity(city);
        setTemperature(11);
    }
    return (
        <body className="body-container">
            <SearchForm handleSearch={handleCitySearch} />
            <CompleteWeatherReport />
        </body>
    );
}

export default Body;
