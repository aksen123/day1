import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './Components/WeatherBox';
import WeatherButton from './Components/WeatherButton';

function App() {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log('현재위치', lat, lon)
      getWeatherByCurrentLocation(lat, lon)
    })
  }
  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3bcd04968857f509a8a0f801e8f92ee8&units=metric
    `
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data)
    setWeather(data)
  }

  useEffect(() => {
    getCurrentLocation()
  },[])
  return (
    <div className="App">
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
