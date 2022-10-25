import React from 'react'
import calendar from '../../assets/calendar.png'
import './Forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday']

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <section className='forecast-container'>
            <div className='title-bar'>
                <img className='nav-icon' alt='calendar icon' src={calendar} />
                <label className="forecast">7 Day Forecast</label>
            </div>
            <article className='daily-forecast'>
                {data.list.slice(0, 7).map((item, idx) => (
                    <div className="daily-item">
                        <p className="day">{forecastDays[idx]}</p>
                        {/* <img alt="weather" className="icon-small" src={ `icons/${item.weather[0].icon}.png`} />
                        <label className="description">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_min)}°F / {Math.round(item.main.temp_max)}°C</label> */}
                    </div>
                ))}
            </article>
        </section>
    )
}

export default Forecast