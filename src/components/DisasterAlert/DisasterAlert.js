import React from 'react'
import './DisasterAlert.css'

const DisasterAlert = ({ id, type, attributes }) => {
    return (
        <section className='disaster-alert-message'>
            <div className="alert-details">
                <h2>Alert type: {attributes.type}</h2>
                <h3>Severity: {attributes.severity}</h3>
                <h3>{attributes.headline}</h3>
                <p>Areas affected: {attributes.areas}</p>
                <p>{attributes.description}</p>
            </div>
        </section>
    )
}

export default DisasterAlert