import Cityinput from "./Component/Cityinput";
import "./App.css";
import CityWeather from "./Component/CityWeather";
import React from "react";

function App() {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({});
  const fetchCityWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
      .then((responce) => responce.json())
      .then((result) => {
        console.log(result.main);
        const mydata = result.main;
        setCityWeather(result.main);
        document.getElementById("Feels_like").innerHTML = `Feels_like:${(mydata.feels_like-273).toFixed(2)}&deg C`;
        document.getElementById("Humidity").innerHTML = `Humidity:${mydata.humidity}%`;
        document.getElementById("Pressure").innerHTML = `Pressure:${mydata.pressure} Hg`;
        document.getElementById("Teamperature").innerHTML = `Teamperature:${(mydata.temp-273).toFixed(2)}&deg C`;
        document.getElementById("Max_Temp").innerHTML = `Max_Temp:${(mydata.temp_max-273).toFixed(2)}&deg C`;
        document.getElementById("Min_Temp").innerHTML = `Min_Temp:${(mydata.temp_min-273).toFixed(2)}&deg C`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-2">
      <Cityinput
        city={city}
        setCity={setCity}
        fetchCityWeather={fetchCityWeather}
      />
      <CityWeather />
    </div>
  );
}

export default App;
