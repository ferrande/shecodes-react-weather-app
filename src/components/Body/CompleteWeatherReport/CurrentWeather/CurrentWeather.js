import React, { useState } from "react";
import axios from "axios";

import CurrentLocationInfo from "./CurrentLocationInfo";
import CurrentTemperature from "./CurrentTemperature";
import CurrentStats from "./CurrentStats";

function CurrentWeather(props) {
    const [weatherData, setWeatherData] = useState({ loaded: false })

    function handleSubmit(response) {
        const windKmH = response.data.wind.speed * 3.6
        console.log(response.data);

        setWeatherData({
            loaded: true,
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind: windKmH,
            humidity: response.data.main.humidity,
        });
    }

    if (weatherData.loaded) {
        return (
            <div>
                <CurrentLocationInfo city={weatherData.city} />
                <CurrentTemperature temperature={weatherData.temperature} description={weatherData.description} />
                <CurrentStats wind={weatherData.wind} humidity={weatherData.humidity} />
            </div>
        )
    } else {
        const apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleSubmit)

        return (<h1>Loading...</h1>)
    }
}

export default CurrentWeather;