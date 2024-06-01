import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Room from '@mui/icons-material/Room';

export const InfoBox = ({ weatherInfo }) => {
  const InitialImageURL = "https://images.unsplash.com/photo-1673191898498-9bac443b2407?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const brokenCloudURL = 'https://images.unsplash.com/photo-1591057298652-c04b56d4d3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJyb2tlbiUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D';
  const hazeURL = 'https://plus.unsplash.com/premium_photo-1673081112888-f877c594ad18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGF6ZXxlbnwwfHwwfHx8MA%3D%3D';
  const scatteredCloudURL = 'https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NhdHRlcmVkJTIwY2xvdWRzfGVufDB8fDB8fHww';
  const clearSkyURL = 'https://cdn.pixabay.com/photo/2015/06/27/16/38/sky-823624_640.jpg';
  const lightRainURL = 'https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_1280.jpg';
  const moderateRainURL = 'https://cdn.pixabay.com/photo/2020/01/15/17/38/street-4768502_640.jpg';
  const smokeURL = 'https://images.unsplash.com/photo-1580462611434-39cde8c29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtb2tlJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
  const overcastCloudURL = 'https://images.unsplash.com/photo-1489769459544-1b2a788df7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG92ZXJjYXN0JTIwY2xvdWRzfGVufDB8fDB8fHww';
  const mistURL='https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlzdHxlbnwwfHwwfHx8MA%3D%3D';

  // Function to get current day and date
  const getCurrentDayAndDate = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = days[date.getDay()];
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `${day}, ${formattedDate}`;
  };

  return (
    <div className='cardContainer'>
      <Card className='card'>
        <CardMedia
          className='card-media'
          image={weatherInfo.weather === 'broken clouds' ? brokenCloudURL : weatherInfo.weather === 'Haze' ? hazeURL : weatherInfo.weather === 'scattered clouds' ? scatteredCloudURL : weatherInfo.weather === 'clear sky' ? clearSkyURL : weatherInfo.weather === 'light rain' ? lightRainURL : weatherInfo.weather === 'smoke' ? smokeURL : weatherInfo.weather === 'moderate rain' ? moderateRainURL : weatherInfo.weather === 'overcast clouds' ? overcastCloudURL : weatherInfo.weather==='mist'?mistURL:InitialImageURL}
          title="Weather Image"
        />
        <CardContent className='card-content'>
          {weatherInfo.city !== '' && (
            <Typography gutterBottom variant="h5" component="div" className='city'>
              <Room />&nbsp;
              {weatherInfo.city}&nbsp;&nbsp;{
                weatherInfo.temp < 15 ? <AcUnitIcon /> : <WbSunnyIcon />
              }
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary" component={"span"} className='weather-info'>
            <div className='date'>{getCurrentDayAndDate()}</div>
            <div className='weather-data'>Temperature: {weatherInfo.temp}&deg;C</div>
            <div className='weather-data'>Humidity: {weatherInfo.humidity}%</div>
            <div className='weather-data'>Weather: {weatherInfo.weather}</div>
            <div className='weather-data'>Minimum Temperature: {weatherInfo.tempMin}&deg;C</div>
            <div className='weather-data'>Maximum Temperature: {weatherInfo.tempMax}&deg;C</div>
            <div className='weather-data'>Feels Like: {weatherInfo.feelsLike}&deg;C</div>
            <div className='weather-data'>Wind Speed: {weatherInfo.speed} m/s</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
