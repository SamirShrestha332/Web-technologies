import { useEffect, useState } from "react";
import clear_icon from './assets/Assets/clear.png';
import cloud_icon from './assets/Assets/cloud.png';
import drizzle_icon from './assets/Assets/drizzle.png';
import rain_icon from './assets/Assets/rain.png';
import snow_icon from './assets/Assets/snow.png';
import wind_icon from './assets/Assets/wind.png';
import humidity_icon from './assets/Assets/humidity.png';

import clear_backgound from './assets/Background/clear.jpg';
import clearnight_background from './assets/Background/clear_night.jpg';
import cloud_backgound from './assets/Background/cloud.jpg';
import cloudnight_background from './assets/Background/cloud_night.jpg';
import dizzle_backgound from './assets/Background/dizzle.jpg';
import rain_backgound from './assets/Background/rain.jpg';
import rainnight_background from './assets/Background/rain_night.jpg';
import snow_backgound from './assets/Background/snow.jpg';
import snownight_background from './assets/Background/snow_night.jpg';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  const allicons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": snow_icon,
    "10n": snow_icon,
  };

  const allBackground = {
    "01d": clear_backgound,
    "01n": clearnight_background,
    "02d": cloud_backgound,
    "02n": cloudnight_background,
    "03d": cloud_backgound,
    "03n": cloudnight_background,
    "04d": dizzle_backgound,
    "04n": dizzle_backgound,
    "09d": rain_backgound,
    "09n": rainnight_background,
    "10d": snow_backgound,
    "10n": snownight_background,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      console.log(`Fetching weather data from: ${url}`);

      const response = await fetch(url);
      const data = await response.json();
      const icon = allicons[data.weather[0].icon] || clear_icon;
      const background = allBackground[data.weather[0].icon] || clear_backgound;
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: data.main.temp,
        location: data.name,
        icon: icon,
        background: background
      });
    } catch (error) {
      console.log("404 error!");
    }
  };

  useEffect(() => {
    search(city);
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    search(city);
  };

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${weatherData?.background})`}}>
        <h1>Weather App</h1>
        <div className="weathercard">
          <div className="inputsection">
            <input
              type="text"
              placeholder="Enter city Name"
              value={city}
              onChange={handleInputChange}
              title="search"
            />
            <button onClick={handleSearch}>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          {weatherData && (
            <div className="weatherinformation">
              <div className="icons">
                <img src={weatherData.icon} alt="weather icon" />
              </div>
              <div className="temperature">
                <p>{weatherData.temperature}°C</p>
              </div>
              <div className="cityname">{weatherData.location}</div>
              <div className="otherinformation">
                <div className="humidity">
                  <img src={humidity_icon} alt="icon" />
                  <p>{weatherData.humidity}%</p>
                </div>
                <div className="windspeed">
                  <img src={wind_icon} alt="icon" />
                  <p>{weatherData.windspeed} km/h</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
