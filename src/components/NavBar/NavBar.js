import React from 'react'
import './NavBar.css'
import bell from '../../assets/notification-bell.png'
import component from '../../assets/component.png'
import map from '../../assets/trifold.png'
import pin from '../../assets/pin.png'
import calendar from '../../assets/calendar.png'


const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>Stay or Go</h1>
            <div className='nav-icons-container'>
                <a href="https://www.weather.gov/" target="_blank" rel="noreferrer">
                    <img className="nav-icon" alt="notification bell" src={bell} />
                </a>
                <img className='nav-icon component-icon' alt="components icon" src={component} />
                <img className='nav-icon' alt='map icon' src={map} />
                <img className='nav-icon' alt='pin icon' src={pin} />
                <img className='nav-icon' alt='calendar icon' src={calendar} />
            </div>
        </nav>
    )
}

export default NavBar