import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './Components/WeatherBox';
import WeatherButton from './Components/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false)
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log('현재위치', lat, lon)
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3bcd04968857f509a8a0f801e8f92ee8&units=metric
    `
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data", data)
    setWeather(data)
    setLoading(false)
  }
  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bcd04968857f509a8a0f801e8f92ee8&units=metric`
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data", data)
    setWeather(data)
    setLoading(false)
  }
  useEffect(()=>{
    if(city == "") {
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  },[city])

  // useEffect(() => {
  //   getCurrentLocation()
  // },[])
  // useEffect(()=>{
  //   // console.log(city)
  //   getWeatherByCity()
  // },[city])
  const handleCityChange = (city) => {
    if(city === 'current') {
      setWeather(getCurrentLocation())
    } else {
      setCity(city)
    }
  }
  return (
    <div className="App">
      <div className="container">
      <ClipLoader
        color='#f88c6b'
        loading={loading}
        size={150}
      />
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} handleCityChange={handleCityChange}/>
        
      </div>
    </div>
  );
}

export default App;
