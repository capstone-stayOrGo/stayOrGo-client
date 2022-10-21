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

  const fetchDisasterData = async () => {
    const response = await fetch("https://dc6e72c4-8622-4280-9089-79102851df02.mock.pstmn.io/api/v1/disasters?lat=33.2896&long=-97.6982");
    return await response.json();
  }
  // const [lat, lng] = location.split(" ")
  // const fetchCurrentWeather = async (location) => {
  //   // const [lat, lng] = location
  //   const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=imperial`);
  //   const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=imperial`);
    
  //   Promise.all([ currentWeatherFetch, forecastFetch ])
  //       .then(async (response) => {
  //         const weatherResponse = await response[0].json();
  //         const forecastResponse = await response[1].json();
  //         console.log('weatherResponse: ', weatherResponse)
  //         // setCurrentWeather({city: location, ...weatherResponse})
  //         // setForecast({city: location, ...forecastResponse})
  //       })
  //       .catch((err) => console.log(err))
  // // const disasterFetch = fetch(`${DISASTER_API_URL}`)
  //     }

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( (geoposition) => {
      const {latitude, longitude} = geoposition.coords
      setLocation({lat: latitude, lng: longitude})
    })
    fetchDisasterData()
    // fetchCurrentWeather()
    .then((data) => setDisasterAlerts(data.data))
  }, [])
  
 
  console.log('location: ', location) //location: {lat: 32.9956027, lng: -97.3765712}
  // console.log("currentWeather: ", currentWeather)
  // console.log("forecast: ", forecast)
  console.log("disasterAlerts: ", disasterAlerts)

  // useEffect( () => {
  //   navigator.geolocation.getCurrentPosition( (geoposition) => {
  //     const {latitude, longitude} = geoposition.coords
  //     setLocation({lat: latitude, lng: longitude})
  //   })
  // }, [])

  return (
    <div className="App">
      <main>
        <NavBar className='navbar'/>
        <div className="sms-search-weather">
          <SMSNotification />
          <WeatherAlert disasterAlert={disasterAlerts}/>
          {/* <Search onSearchChange={handleOnSearchChange}/> */}
          {/* {currentWeather && location ? <Weather data={currentWeather} location={location} /> : <h2>Loading...</h2>} */}
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





// const onLoad = (location) => {
  // const [lat, lon] = location.split(" ")
  // const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
  // const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
  // const disasterFetch = fetch(`${DISASTER_API_URL}`)
  // //  
  // Promise.all([ currentWeatherFetch, forecastFetch, disasterFetch ])
  // .then(async (response) => {
  //   const weatherResponse = await response[0].json();
  //   const forecastResponse = await response[1].json();
  //   const disasterResponse = await response[2].json();
  
  //   setCurrentWeather({ ...weatherResponse });
  //   setForecast({ ...forecastResponse });
  //   setDisasterAlerts({ data: location , ...disasterResponse })
  // })
  // .catch((err) => console.log(err))
// }



  // const handleOnSearchChange = (searchData) => {
  //   // console.log("searchData: ", searchData) //searchData: {value: '42.558333333 1.555277777', label: 'Andorra, AD'} from search function
  //   // const [lat, lon] = searchData.value.split(" ")
    
  //   // const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
  //   // const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
  //   // const disasterFetch = fetch(`${DISASTER_API_URL}`)

  //   // Promise.all([currentWeatherFetch, forecastFetch, disasterFetch ])
  //   // .then(async (response) => {
  //   //   const weatherResponse = await response[0].json();
  //   //   const forecastResponse = await response[1].json();
  //   //   const disasterResponse = await response[2].json();

  //   //   setCurrentWeather({ city: searchData.label , ...weatherResponse });
  //   //   setForecast({ city: searchData.label , ...forecastResponse });
  //   //   setDisasterAlerts({ data: searchData , ...disasterResponse })
  //   // })
  //   // .catch((err) => console.log(err))
  // }