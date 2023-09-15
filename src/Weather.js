import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Paris</h1>
      <ul>
        <li>
          Sunday 12:00
        </li>
        <li>Cloudy</li>
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
              22
            </strong>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6 pe-0">
          <ul className="humidity-wind">
            <li>Humidity: 55 %</li>
            <li>Wind: 5 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}