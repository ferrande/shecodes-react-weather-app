import React, { useState } from "react";
import axios from "axios";

import CurrentLocationInfo from "./WeatherInfo/CurrentLocationInfo";
import CurrentTemperature from "./WeatherInfo/CurrentTemperature"
import CurrentStats from "./WeatherInfo/CurrentStats";


function CurrentWeather() {
    const [weatherData, setWeatherData] = useState({ loaded: false })

    function handleSubmit(response) {
        const formattedDate = new Date(response.data.dt * 1000);
        const windKmH = response.data.wind.speed * 3.6;

        setWeatherData({
            loaded: true,
            city: response.data.name,
            date: formattedDate,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind: windKmH,
            humidity: response.data.main.humidity,
        });
    }

    if (weatherData.loaded) {
        return (
            <div>
                <CurrentLocationInfo city={weatherData.city} weatherData={weatherData} />
                <CurrentTemperature temperature={weatherData.temperature} description={weatherData.description} />
                <CurrentStats wind={weatherData.wind} humidity={weatherData.humidity} />
            </div>
        )
    } else {
        const apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleSubmit)

        return (<h1>Loading...</h1>)
    }
}

export default CurrentWeather;