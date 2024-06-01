import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
export const SearchBox = ({ updateInfo }) => {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_KEY = "00080f089a5c76ddebb630389d816d31";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                speed: jsonResponse.wind.speed,
            }
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        } catch (error) {
            setError(true);
        }
    }


    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" className='search-field' value={city} label="Enter a City" onChange={handleChange} variant="outlined" required />
                <br />
                <Button variant="contained" className='search-btn' size="large" type='submit'>Search</Button>
                {
                    error && <p className='error-message'>No such place exist!</p>
                }
                
            </form>
        </div>
    )
}
