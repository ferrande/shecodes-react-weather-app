import React, { useState } from "react";

import "../../../../styles/styles.css";

function SearchForm({ handleSearch }) {
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch(city.toLowerCase());
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Search for a city..."
                    value={city}
                    onChange={updateCity}
                />
                <div className="input-group-append">
                    <button type="submit" className="btn" value="Search">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
