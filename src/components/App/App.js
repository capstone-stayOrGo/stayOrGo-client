// Dependencies
import React, { useState, useEffect } from "react"
// Components
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import NavBar from "../NavBar/NavBar";
import WeatherAlert from "../WeatherAlert/WeatherAlert";
import SMSNotification from "../SMSNotification/SMSNotification";
import {DISASTER_API_URL, ADD_USER_URL} from '../../api'
import './App.css';

function App() {

  const [location, setLocation] = useState("")
  const [smsFeedback, setSMSFeedback] = useState("")
  const [disasterAlerts, setDisasterAlerts] = useState("")

  const formUserData = (phoneNumber) => {
    return {
      "lat": String(location.lat),
      "long": String(location.lng),
      "phone": String(phoneNumber),
    }
  }

  const addUser = (phoneNumber) => {
    const userData = formUserData(phoneNumber)
    fetch(ADD_USER_URL, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      return response.json()
    })
    .then(
      data => {
        const {phone, lat, long} = data.data.attributes
        setSMSFeedback({ type: "success", message: `Success! You will receive disaster alerts at ${phone} for location at lat:${lat} long:${long}`})
      }
    )
    .catch( error => {
      setSMSFeedback({ type: "error", message: `Error. Something went wrong. More info: ${error}`})
    })
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
          <SMSNotification addUser={addUser} userMessage={smsFeedback} />
          <WeatherAlert disasterAlert={disasterAlerts} />
        </div>
        <div className="map-container">
          {location ? <Map location={location} /> : <h2>Loading...</h2>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
