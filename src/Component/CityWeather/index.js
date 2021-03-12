import React from "react";
import { WiDaySunny } from "weather-icons-react";
import "./index.css";

function CityWeather() {
  return (
    <div className="header">
      <h1 className="head">Weather Description of your city</h1>
      <div className="contain1">
        <div className="containr">
          {/* <WiDaySunny size={100} color="red" /> */}
          <div className="temp">
            <h2 id="Feels_like"></h2>
            <h2 id="Humidity"></h2>
          </div>
          <div className="temp1">
            <h2 id="Pressure"></h2>
            <h2 id="Teamperature"></h2>
          </div>
          <div className="temp2">
            <h2 id="Max_Temp"></h2>
            <h2 id="Min_Temp"></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityWeather;