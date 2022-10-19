import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './Forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday']

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <section className='forecast-container'>
            <label className="forecast">7 Day Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <label className="day">{forecastDays[idx]}</label>
                                    <img alt="weather" className="icon-small" src={ `icons/${item.weather[0].icon}.png`} />
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°F / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className='detail-column'>
                                    <div className="daily-details-grid-item">
                                        <label>Pressure:</label>
                                        <label>{item.main.pressure} hPa</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Humidity:</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Clouds:</label>
                                        <label>{item.clouds.all}</label>
                                    </div>
                                </div>
                                <div className='detail-column'>
                                    <div className="daily-details-grid-item">
                                        <label>Wind Speed:</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Sea Level:</label>
                                        <label>{item.main.sea_level}m</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Feels like: </label>
                                        <label>{Math.round(item.main.feels_like)}°F</label>
                                    </div>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default Forecast