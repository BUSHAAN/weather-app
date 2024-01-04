import React from "react";
import CloudIcon from "../Assets/cloud.png";
import HumidityIcon from "../Assets/humidity.png";
import SearchIcon from "../Assets/search.png";
import WindIcon from "../Assets/wind.png";

import "./WeatherApp.css";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
          <img src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={CloudIcon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img className="icon" src={HumidityIcon} alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img className="icon" src={WindIcon} alt="" />
          <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
