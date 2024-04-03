import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from'react-icons/fa'
import './Header.css'


const Header = () => {

  const [isMobile,setIsMobile] = useState(false)
  const togglemobile =()=>{
    setIsMobile(!isMobile)
  }


  return (
    <div>
        <div className='header'>
        <p>
        <span>x</span><span>Bet</span>
        </p>
        {
          isMobile
          ?(<FaTimes className='menu-icon' onClick={togglemobile} />)
          :(<FaBars className='menu-icon' onClick={togglemobile} />)
        }
            <ul className={isMobile ? 'nav-menu active':'nav-menu'}>
                <li><a href='#home'>Home</a></li>
                <li><a href='#featured_picks'>Featured Picks</a></li>
                <li><a href='#subscribe'>Subscribe</a></li>
                <li id='navbut'><a href='#contact_us'>Contact Us</a></li>
               
            </ul>
        </div>
        {/* header ends here */}
        </div>
  )
}

export default Header