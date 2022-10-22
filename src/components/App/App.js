// Dependencies
import React, { useState, useEffect } from "react"
// Components
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import NavBar from "../NavBar/NavBar";
import WeatherAlert from "../WeatherAlert/WeatherAlert";
import SMSNotification from "../SMSNotification/SMSNotification";
import Search from "../Search/Search";
import Weather from "../Weather/Weather";
import Forecast from "../Forecast/Forecast";
import { WEATHER_API_KEY, WEATHER_API_URL, DISASTER_API_URL } from '../../api'
import './App.css';

function App() {

  const [location, setLocation] = useState("")
  const [currentWeather, setCurrentWeather] = useState("")
  const [forecast, setForecast] = useState("")
  const [disasterAlerts, setDisasterAlerts] = useState("")

  const addUser = (phoneNumber) => {
    // Make a fetch POST request to the users endpoint with the phone number provided by the SMS form
    // Display a success/failure message to the user based on the response from the server
  }

  const formDisasterURLWithCoords = () => {
    // Should we move this functionality into api.js?
    return `${DISASTER_API_URL}?lat=${location.lat}&long=${location.lng}`
  }

  const fetchDisasterData = async () => {
    // Should we move this functionality into api.js?
    const urlForDisastersNearMe = formDisasterURLWithCoords()
    const response = await fetch(urlForDisastersNearMe);
    return await response.json();
  }
  

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( (geoposition) => {
      const {latitude, longitude} = geoposition.coords
      setLocation({lat: latitude, lng: longitude})
    })
  }, [])
  
  useEffect( () => {
    if(location.lat && location.lng){
      fetchDisasterData()
          .then((data) => {
            setDisasterAlerts(data.data)
          })
    }
  }, [location])

  return (
    <div className="App">
      <main>
        <NavBar className='navbar'/>
        <div className="sms-search-weather">
          <SMSNotification addUser={addUser} />
          <WeatherAlert disasterAlert={disasterAlerts}/>
          
        </div>
        <div className="map-alert">
          {location ? <Map location={location} /> : <h2>Loading...</h2>}
          {forecast && <Forecast data={forecast} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;




