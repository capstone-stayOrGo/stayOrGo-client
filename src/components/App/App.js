// Dependencies
import React, { useState, useEffect } from "react"
// import { GenIcon } from "react-icons";
// Components
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import NavBar from "../NavBar/NavBar";
import WeatherAlert from "../WeatherAlert/WeatherAlert";
import SMSNotification from "../SMSNotification/SMSNotification";
import Search from "../Search/Search";
import Weather from "../Weather/Weather";
import Forecast from "../Forecast/Forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../api'
import './App.css';

function App() {

  const [location, setLocation] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    console.log("searchData: ", searchData)
    const [lat, lon] = searchData.value.split(" ")
    
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)

    Promise.all([currentWeatherFetch, forecastFetch, ])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label , ...weatherResponse });
      setForecast({ city: searchData.label , ...forecastResponse });
    })
    .catch((err) => console.log(err))
  }

  console.log("currentWeather: ", currentWeather)
  console.log("forecast: ", forecast)

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( (geoposition) => {
      const {latitude, longitude} = geoposition.coords
      setLocation({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(()=> {
  }, [location])

  return (
    <div className="App">
      <main>
        <NavBar className='navbar'/>
        <div className="sms-search-weather">
          <SMSNotification />
          <Search onSearchChange={handleOnSearchChange}/>
          {currentWeather && <Weather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
        </div>
        <div className="map-alert">
          {location ? <Map location={location} /> : <h2>Loading...</h2>}
          <WeatherAlert />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
