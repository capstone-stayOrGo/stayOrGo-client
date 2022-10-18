// Dependencies
import React, { useState, useEffect } from "react"
import { GenIcon } from "react-icons";
// Components
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import './App.css';

function App() {

  const [location, setLocation] = useState(undefined)

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( (geoposition) => {
      const {latitude, longitude} = geoposition.coords
      setLocation({lat: latitude, long: longitude})
    })
  }, [])

  useEffect(()=> {
    console.log(location)
  }, [location])

  return (
    <div className="App">
      <h1>Stay or Go</h1>
      <div id="map"></div>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
