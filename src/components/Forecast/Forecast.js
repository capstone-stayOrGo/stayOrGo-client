import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
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
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton className='accordion-button'>
                                <div className="daily-item">
                                    <label className="day">{forecastDays[idx]}</label>
                                    <img alt="weather" className="icon-small" src={ `icons/${item.weather[0].icon}.png`} />
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°F / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default Forecast




{/* <AccordionItemPanel>
    <div className="daily-details-grid">
        <div className='detail-column'>
            <p>Pressure:  {item.main.pressure} in</p>
            <p>Humidity:  {item.main.humidity}%</p>
            <p>Clouds:  {item.clouds.all}</p>
        </div>
        <div className='detail-column'>
            <p>Wind Speed:  {Math.round(item.wind.speed)} mph</p>
            <p>Sea Level:  {item.main.sea_level} ft</p>
            <p>Feels like:  {Math.round(item.main.feels_like)}°F</p>
        </div>
    </div>
</AccordionItemPanel> */}