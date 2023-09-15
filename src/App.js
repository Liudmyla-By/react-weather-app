import React from "react";
import Weather from "./Weather.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project was coded by Liudmyla Bykadorova and is
        <a href="https://github.com/Liudmyla-By/react-weather-app" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
