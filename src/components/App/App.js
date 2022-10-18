// Dependencies
import React, { useState, useEffect } from "react"
// import { GenIcon } from "react-icons";
// Components
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import NavBar from "../NavBar/NavBar";
import WeatherAlert from "../WeatherAlert/WeatherAlert";
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
      <NavBar />
      <div className="map-alert">
        {location ? <Map location={location} /> : <h2>Loading...</h2>}
        <WeatherAlert />
      </div>
      <Footer />
    </div>
  );
}

export default App;
