import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./SMSNotification.css";

const SMSNotification = (props) => {
  const {userMessage} = props;
  const [phoneNumber, setPhoneNumber] = useState();

  const resetInputField = () => {
    setPhoneNumber('+1')
  }

  const onSMSSubmit = (event) => {
    event.preventDefault();
    props.addUser(phoneNumber)
    resetInputField()
  };

  return (
    <section className="sms-notify">
      <p className="notification-greeting">
        Enter your phone number below to receive SMS notifications of new alerts
      </p>
        <form className="sms-form" onSubmit={onSMSSubmit}>
          <PhoneInput
            type='tel'
            className='phone-input'
            country={"us"}
            value={phoneNumber}
            onChange={phoneNumber => setPhoneNumber(phoneNumber)}
          />
          <button className="submit-btn"> Submit </button>
          {<h2 id="userMessage" className={userMessage.type}>{userMessage.message}</h2>}
        </form>
    </section>
  );
};

export default SMSNotification;
