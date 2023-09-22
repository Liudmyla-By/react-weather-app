import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="date">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={64} />
            </div>

            <div className="WeatherTemperature">
              <span className="temperature">{Math.round(props.data.temperature)}</span>
              <span className="unit"> °C</span>
            </div>
          </div>
        </div>
        <div className="col-6 pe-0">
          <ul className="condition">
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div >
  );
}