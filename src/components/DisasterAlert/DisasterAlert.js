import React from 'react'
import './DisasterAlert.css'

const DisasterAlert = ({ id, type, attributes }) => {
    return (
        <section className='disaster-alert-message'>
            <h1 className='disaster-title'>Disaster Alerts</h1>
            <h2>Alert type: {attributes.type}</h2>
            <h3>Severity: {attributes.severity}</h3>
            <h3>{attributes.headline}</h3>
            <p>Areas affected: {attributes.areas}</p>
            <p>{attributes.description}</p>
        </section>
    )
}

export default DisasterAlert