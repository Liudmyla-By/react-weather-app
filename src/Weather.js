import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showWeather(responce) {
    setWeatherData({
      city: responce.data.city,
      ready: true,
      coordinates: responce.data.coordinates,
      date: new Date(responce.data.time * 1000),
      temperature: Math.round(responce.data.temperature.current),
      wind: Math.round(responce.data.wind.speed),
      humidity: responce.data.temperature.humidity,
      description: responce.data.condition.description,
      icon: responce.data.condition.icon,
    });
    console.log(responce.data.condition.description)
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function Search() {
    const apiKey = "6023o651f6tfcb9ffa0c896e14d7ed9c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function geolocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(accessPosition);
  }

  function accessPosition(position) {
    let apiKey = "6023o651f6tfcb9ffa0c896e14d7ed9c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city..."
                id="search-input"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" className="btn btn-light" value="Search" />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn d-none d-md-block btn-light"
                value="Current"
                id="button"
                onClick={geolocation}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <br />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <br />
        <img src="/images/img.png" alt="Weather phrase" className="img-fluid phrase" />

      </div>
    );
  }
  else {
    Search();
    return "Searching...";
  }
}