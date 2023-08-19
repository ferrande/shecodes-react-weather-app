import React, { useState } from "react";

function SearchForm({ handleSearch }) {
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch(city);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    return (
        <div className="form col">
            <form id="cityForm" action="#" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control form-input"
                    placeholder="Search for a city"
                    id="cityInput"
                    onChange={updateCity}
                />
                <i className="fa fa-search"></i>
                <button id="searchButton" type="submit" value="Search"></button>
            </form>
        </div>
    );
}

export default SearchForm;
