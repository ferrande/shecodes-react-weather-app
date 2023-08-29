import React from "react";
import clearSky from "../../assets/clear.png";
import fewClouds from "../../assets/few-clouds.png";
import scatteredClouds from "../../assets/scattered-clouds.png";
import brokenClouds from "../../assets/broken-clouds.png";
import showerRain from "../../assets/shower-rain.png";
import rainy from "../../assets/rainy.png";
import thunderstorm from "../../assets/thunderstorm.png";
import snow from "../../assets/snow.png";
import mist from "../../assets/mist.png";

export default function WeatherIcon({ code }) {
    const codeMapping = {
        "01d": clearSky,
        "01n": clearSky,
        "02d": fewClouds,
        "02n": fewClouds,
        "03d": scatteredClouds,
        "03n": scatteredClouds,
        "04d": brokenClouds,
        "04n": brokenClouds,
        "09d": showerRain,
        "09n": showerRain,
        "10d": rainy,
        "10n": rainy,
        "11d": thunderstorm,
        "11n": thunderstorm,
        "13d": snow,
        "13n": snow,
        "50d": mist,
        "50n": mist,
    };

    return <img src={codeMapping[code]} alt="weather" className="current-weather-image align-self-center" id="icon" />;
}