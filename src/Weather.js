import "./App.css";
import React from "react";

export default function DateDescription(props) {
    return (
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
                        {props.mainTemp}
                    </strong>
                    <span className="unit">°C</span>
                </div>
            </div>
            <div className="col-6 pe-0">
                <ul className="humidity-wind">
                    <li>Humidity: {props.humidity} %</li>
                    <li>Wind: {props.wind} m/s</li>
                </ul>
            </div>
        </div>
    );
}
