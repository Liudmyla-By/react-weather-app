import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="flexbox weather-temperature">
                        <div>
                            <WeatherIcon code={props.data.icon} size={52} />
                        </div>
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