import React, { useState } from "react";
import ClearIcon from "../Assets/clear.png";
import CloudIcon from "../Assets/cloud.png";
import DrizzleIcon from "../Assets/drizzle.png";
import HumidityIcon from "../Assets/humidity.png";
import RainIcon from "../Assets/rain.png";
import SearchIcon from "../Assets/search.png";
import SnowIcon from "../Assets/snow.png";
import WindIcon from "../Assets/wind.png";
import "./WeatherApp.css";

const WeatherApp = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [wIcon, setwIcon] = useState(CloudIcon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    if (data.cod === 200) {
      humidity[0].innerHTML = data.main.humidity + "%";
      wind[0].innerHTML = data.wind.speed + " km/h";
      temp[0].innerHTML = data.main.temp + "°C";
      location[0].innerHTML = data.name;

      let icon = data.weather[0].icon;
      switch (icon) {
        case "01d":
        case "01n":
          setwIcon(ClearIcon);
          break;
        case "02d":
        case "02n":
          setwIcon(CloudIcon);
          break;
        case "03d":
        case "03n":
          setwIcon(DrizzleIcon);
          break;
        case "04d":
        case "04n":
          setwIcon(DrizzleIcon);
          break;
        case "09d":
        case "09n":
          setwIcon(RainIcon);
          break;
        case "10d":
        case "10n":
          setwIcon(RainIcon);
          break;
        case "11d":
        case "11n":
          setwIcon(RainIcon);
          break;
        case "13d":
        case "13n":
          setwIcon(SnowIcon);
          break;        
        default:
          setwIcon(ClearIcon);
          break;
      }
    } else {
      humidity[0].innerHTML = "-";
      wind[0].innerHTML = "-";
      temp[0].innerHTML = "-";
      location[0].innerHTML = "City not found";
      setwIcon();
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wIcon} alt="" />
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
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
