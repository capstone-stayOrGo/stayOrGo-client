import React from 'react'
import './Weather.css'
import locationPin from '../../assets/location-pin.png'

const Weather = ({data}) => {
    return (
        <section className='current-weather-container'>
            
                <div className='location'>
                    <img alt="location pin" className='location-pin'
                    src={locationPin}/>
                    <p className='city'>{data.city}</p>
                </div>

                <div className='temperature-container'>
                    <p className='temperature'>{Math.round(data.main.temp)}°F</p>
                    <img alt="weather" className='weather-icon' src={`icons/${data.weather[0].icon}L.png`} />
                </div>

                <hr className="divider" style={{
                    color: 'black',

                    }} 

                />

                {/* <div className='description'>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div> */}


                <div className='details'>
                    {/* <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div> */}
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/sec</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure} hPa</span>
                    </div>
                </div>

        </section>
    )
}

export default Weather