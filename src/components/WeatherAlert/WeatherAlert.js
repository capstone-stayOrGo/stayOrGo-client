import React from 'react'
import './WeatherAlert.css'
import DisasterAlert from '../DisasterAlert/DisasterAlert'

const WeatherAlert = ({ disasterAlert }) => {
    const fullAlert = Object.keys(disasterAlert)
    const alertDetails = fullAlert.map(eachAlert => {
        return disasterAlert[eachAlert].attributes
    })
console.log({alertDetails})
    const formattedAlert = alertDetails.map((eachFormattedAlert, index) => {
        const { areas, description, headline, severity, type, urgency } = eachFormattedAlert
        return (
        <DisasterAlert 
            key={index}
            areas={areas}
            type={type}
            description={description}
            headline={headline}
            severity={severity}
            urgency={urgency}
        />
        )
    })
    return (
        <section className='weather-alert'>
            <h1 className='disaster-title'>Disaster Alerts</h1>
            { formattedAlert.length ? formattedAlert : <h2>No disaster alerts for your area at this time!</h2>}
        </section>
    )
}

export default WeatherAlert