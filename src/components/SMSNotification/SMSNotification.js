import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './SMSNotification.css'

const SMSNotification = () => {
    const [ phoneNumber, setPhoneNumber ] = useState();

    return (
        <section className='sms-notify'>
            <p>Enter your phone number below to receive SMS notifications of new alerts</p>
            <div className='phone-input'>
                <PhoneInput
                    country={'us'}
                    value={phoneNumber}
                    // onChange={phoneNumber => setPhoneNumber({ phoneNumber })}
                />
                <button className='submit-btn' role="button">Submit</button>
            </div>
        </section>
    )
}

export default SMSNotification