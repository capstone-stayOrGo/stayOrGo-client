import React from 'react'
import './Weather.css'
import locationPin from '../../assets/location-pin.png'

const Weather = ({ data }) => {
    return (
        <section className='current-weather-container'>
            
                <div className='location'>
                    <img alt="location pin" className='location-pin'
                    src={locationPin}/>
                    <p className='city'>{data.city}</p>
                </div>

                <div className='temperature-container'>
                    <div>
                        <p className='temperature'>{Math.round(data.main.temp)}°F</p>
                        <p>Feels like {Math.round(data.main.feels_like)}°F</p>
                    </div>
                    <img alt="weather" className='weather-icon' src={`icons/${data.weather[0].icon}L.png`} />
                </div>

                <hr className="divider"/>

                {/* <div className='description'>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div> */}


                <div className='details'>
                    <div className='details'>
                        <img alt="weather" className="icon-small" src={`icons/${data.weather[0].icon}.png`} />
                        <p className="description">{data.weather[0].description}</p>
                    </div>
                </div>

        </section>
    )
}

export default Weather