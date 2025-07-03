import { useEffect, useState } from 'react';
import "./WeatherApp.css";

export default function WeatherApp() {
  const owm_key = import.meta.env.VITE_owm_key;
  const lat = "36.880";
  const lon = "-86.418";
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${owm_key}`)
        if (!response.ok) {
          throw new Error(`HTTP ERROR: ${response.status}`)
        }
        const result = await response.json();
        setWeatherData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
        }
      };
        getWeather();
    }, [owm_key]);
  
if (error) return (<p>Error {error}</p>)
if (isLoading) return (<p>Loading weather data...</p>)
  else if (!isLoading) return (
    <>
      <div className="weatherContainer">
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
          <p>{(weatherData.weather[0].description).toUpperCase()}</p>
          <p>{weatherData.name}</p>
          <p>{((weatherData.main.temp - 273.15) * 9/5 + 32).toFixed(0)}°F</p>
      </div>
    </>
  )
}
