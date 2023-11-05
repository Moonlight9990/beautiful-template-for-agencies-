import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div>

        <div className='first-nav'>

            <span className='address'>
                <h4><FontAwesomeIcon icon={faLocationDot} style={{color: "#fdd428",}} /> 1010 Avenue, New York, NY 10018 US.</h4>
                <h4> <FontAwesomeIcon icon={faPhone} style={{color: "#fdd428",}} /> 212 386 5575, 212 386 5576</h4>
            </span>

            <span className='Date'>
               <h4><FontAwesomeIcon icon={faClock} style={{color: "#fdd428", marginRight: "10px"}} />Mon-Sat, 8.00-18.00. Sunday CLOSED</h4>
            </span>

        </div>


    </div>
  )
}

export default Navbar