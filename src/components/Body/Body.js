import React from "react";

import SearchForm from "./SearchForm/SearchForm";
import CompleteWeatherReport from "./CompleteWeatherReport/CompleteWeatherReport";

function Body() {

    function handleCitySearch() {
        console.log("searching...")
    }
    return (
        <body className="body-container">
            <SearchForm handleSearch={handleCitySearch} />
            <CompleteWeatherReport />
        </body>
    );
}

export default Body;
