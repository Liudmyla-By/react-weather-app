import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showWeather(responce) {
    setWeatherData({
      city: responce.data.city,
      ready: true,
      date: new Date(responce.data.time * 1000),
      temperature: Math.round(responce.data.temperature.current),
      wind: Math.round(responce.data.wind.speed),
      humidity: responce.data.temperature.humidity,
      discription: responce.data.condition.description
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city..."
                id="search-input"
                autoComplete="off"
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
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li> {weatherData.description} </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="flexbox weather-temperature">
              <img
                className="main-icon img-fluid"
                src="https://freesvg.org/img/weather-overcast.png"
                alt="weather-icon"
                id="icon"
              />
              <strong className="temperature" id="temperature">
                {weatherData.temperature}
              </strong>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6 pe-0">
            <ul className="humidity-wind">
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  else {
    const apiKey = "6023o651f6tfcb9ffa0c896e14d7ed9c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Searching...";
  }
}