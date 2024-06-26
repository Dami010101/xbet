import React, { useEffect } from 'react'
import './Content.css'
import { PiMouseBold } from "react-icons/pi";
import Aos from 'aos'
import 'aos/dist/aos.css'




const Content = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])


  return (

    <div className='hero' id='home' >
      <div className='px-2' data-aos='slide-left'>
      <h1>
        <span>ENGLISH FANTASY</span>
        <span>CROSS-PLATFORM SECURE</span>
        <span>FANTASY LEAGUE</span>
      </h1>
      <p id='ycj'>You can join and participate in our special Fantasy leagues</p>
            <div className='sec_but'>
               <button className='sec1_but1'>Join FPL</button>
              <button className='sec1_but2'>Join UEFA League</button>
            </div>
            <div className='mouse'>
              <a href='#featured_picks'><PiMouseBold size={20} className='maus'/></a>
              </div>
      </div>
    </div>

  )
}

export default Content