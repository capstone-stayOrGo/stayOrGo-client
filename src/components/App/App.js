// Dependencies
import React, { useState, useEffect } from "react"
// Components
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import NavBar from "../NavBar/NavBar";
import WeatherAlert from "../WeatherAlert/WeatherAlert";
import SMSNotification from "../SMSNotification/SMSNotification";
// import { WEATHER_API_KEY, WEATHER_API_URL, DISASTER_API_URL } from '../../api'
import './App.css';

function App() {

  const [location, setLocation] = useState("")
  const [disasterAlerts, setDisasterAlerts] = useState("")

  const fetchDisasterData = async () => {
    const response = await fetch("https://dc6e72c4-8622-4280-9089-79102851df02.mock.pstmn.io/api/v1/disasters?lat=33.2896&long=-97.6982");
    return await response.json();
  }

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( (geoposition) => {
      const {latitude, longitude} = geoposition.coords
      setLocation({lat: latitude, lng: longitude})
    })
    fetchDisasterData()
    .then((data) => setDisasterAlerts(data.data))
  }, [])

  return (
    <div className="App">
      <main>
        <NavBar className='navbar'/>
        <div className="sms-search-weather">
          <SMSNotification />
          <WeatherAlert disasterAlert={disasterAlerts}/>
        </div>
        <div className="map-alert">
          {location ? <Map location={location} /> : <h2>Loading...</h2>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;