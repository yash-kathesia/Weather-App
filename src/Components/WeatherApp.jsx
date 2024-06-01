import React, { useState } from 'react'
import { SearchBox } from "./SearchBox";
import { InfoBox } from './InfoBox';
import './WeatherApp.css';

export const WeatherApp = () => {

    const [weatherInfo, setWeatherInfo] = useState({
        temp: 0,
        city: "",
        weather: "",
        humidity: 0,
        tempMax: 0,
        tempMin: 0,
        feelsLike: 0,
        speed:0,
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