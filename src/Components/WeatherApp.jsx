import React, { useState } from 'react'
import { SearchBox } from "./SearchBox";
import { InfoBox } from './InfoBox';
import './WeatherApp.css';

export const WeatherApp = () => {

    const [weatherInfo, setWeatherInfo] = useState({
        temp: 26,
        city: "Ahmedabad",
        weather: "Haze",
        humidity: 42,
        tempMax: 12,
        tempMin: 46,
        feelsLike: 50,
        speed:12,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className='weatherAppContainer'>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}