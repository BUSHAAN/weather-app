import React from "react";
import SearchIcon from "../Assets/search.png";
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
    </div>
  );
};

export default WeatherApp;
