import React, { useEffect } from 'react'
import './Xdownload.css';
import { FaApple } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { FaWindows } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import bacbut from '../../asset/Bacca.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Xdownload = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        })
      }, [])

  return (
    <div className='xcon' id='subscribe'>
        <div className='xd' >
            <div data-aos='slide-up' >
            <h1 className='hlin' >XBet APP DOWNLOAD</h1>
                <p className='py-3 '>Our apps will soon be available for download on all stores.</p>
                    <div className='secbut'>
                        <div className='butd'>
                        <FaApple /><p>ios</p>
                        </div>
                        <div className='butd'>
                        <DiAndroid /><p>Android</p>
                        </div>
                        <div className='butd'>
                        <FaWindows /><p>Windows</p>
                        </div>
                    </div>
            </div>

        </div>
        <div className='fle' data-aos='slide-up'>
                        <div >
                            <h1 className='hlin'>SUBSCRIBE NOW!</h1>
                            <form>
                                <input id='isub' type="email" placeholder="Enter your email" />
                                <button id='ssub' type="submit"> <a href='mailto:akinwande.dj@gmail.com'>Subscribe</a> </button>
                            </form>
                            <div className='buticon'>
                                <div className='bicon'><FaFacebookF /></div>
                                <div className='bicon'><FaTwitter /></div>
                                <div className='bicon'><FaInstagram /></div>

                           </div>
                        </div>
      
        </div>

    </div>
  )
}

export default Xdownload