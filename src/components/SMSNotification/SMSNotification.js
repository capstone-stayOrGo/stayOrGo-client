import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './SMSNotification.css'

const SMSNotification = () => {
    const [ phoneNumber, setPhoneNumber ] = useState();

    return (
        <section className='sms-notify'>
            <p>SMS Notification sign up</p>
            <PhoneInput
                country={'us'}
                value={phoneNumber}
                // onChange={phoneNumber => setPhoneNumber({ phoneNumber })}
            />
            <button>Submit</button>
        </section>
    )
}

export default SMSNotification