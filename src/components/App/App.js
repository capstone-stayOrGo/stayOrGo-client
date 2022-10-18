// Dependencies
import React, { useState, useEffect } from "react"
// import { GenIcon } from "react-icons";
// Components
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import NavBar from "../NavBar/NavBar";
import WeatherAlert from "../WeatherAlert/WeatherAlert";
import SMSNotification from "../SMSNotification/SMSNotification";
import './App.css';

function App() {

  const [location, setLocation] = useState(null)

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( (geoposition) => {
      const {latitude, longitude} = geoposition.coords
      setLocation({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(()=> {
    // Runs whenever the location changes
    // console.log(location)
  }, [location])

  return (
    <div className="App">
      <main>
        <NavBar />
        <div className="sms-search-weather">
          <SMSNotification />
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
