import React from 'react'
import './WeatherAlert.css'
import DisasterAlert from '../DisasterAlert/DisasterAlert'

const WeatherAlert = ({ disasterAlert }) => {
    //conditional if type==="disaster"
    const alerts = disasterAlert.data.map((alert) => {
        const { key, id, type, attributes } = alert
        return <DisasterAlert 
            key={id}
            id={id}
            type={type}
            attributes={attributes}
        />
    })
    return (
        <section className='weather-alert'>
            { alerts.length ? alerts : <h2>No disaster alerts at this time!</h2>}
        </section>
    )
}

export default WeatherAlert