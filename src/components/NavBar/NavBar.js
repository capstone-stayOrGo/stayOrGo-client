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
                <a className="navbar-icon" href="https://www.weather.gov/" target="_blank" rel="noreferrer">
                    <img className="nav-icon" alt="notification bell" src={bell} />
                </a>
                <a className="navbar-icon" href='https://www.noaa.gov/weather'>
                    <img className='nav-icon component-icon' alt="components icon" src={component} />
                </a>
                <a className="navbar-icon" href="https://www.google.com/maps/d/u/0/viewer?mid=1hSBxVh3Viv0sbzIWioVFtZ2T950&hl=en&ll=39.91549172382009%2C-92.51966541028435&z=5">
                    <img className='nav-icon' alt='map icon' src={map} />
                </a>
                <a className="navbar-icon" href='https://weather.com/weather/today/l/3f345b93f02bdea125a122a4798a6b17174a3153bb0f45b4d5238343613d7368'>
                    <img className='nav-icon' alt='pin icon' src={pin} />
                </a>
                <a className="navbar-icon" href='https://www.wunderground.com/'>
                    <img className='nav-icon' alt='calendar icon' src={calendar} />
                </a>
            </div>
        </nav>
    )
}

export default NavBar