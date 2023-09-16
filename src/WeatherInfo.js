import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li>
                    {props.data.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="flexbox weather-temperature">
                        <img
                            className="main-icon img-fluid"
                            src={props.data.iconUrl}
                            alt={props.data.description}
                        />
                        <strong className="temperature">
                            {props.data.temperature}
                        </strong>
                        <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6 pe-0">
                    <ul className="humidity-wind">
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {props.data.wind} m/s</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}