import React from 'react'
import './DisasterAlert.css'

const DisasterAlert = ({ areas, description, headline, severity, type, urgency }) => {
    return (
        <section className='disaster-alert-message'>
            <div className="alert-details">
                <h2 className='alert-type'>Alert type: {type}</h2>
                <div className='severity-headline'>
                    <h3>Severity: {severity}</h3>
                    <h3>{headline}</h3>
                </div>
                <div className='alert-info'>
                    <p>Areas affected: {areas}</p>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}

export default DisasterAlert