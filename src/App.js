import React from "react";
import Search from "./Search.js"
import Weather from "./Weather.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <h1>Paris</h1>
          <ul>
            <li>
              Sunday 12:00
            </li>
            <li>Cloudy</li>
          </ul>
          <Weather humidity="70" wind="5" mainTemp="22" />
        </div>
        <footer>
          This project was coded by Liudmyla Bykadorova and is
          <a href="https://github.com/Liudmyla-By/react-weather-app" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
