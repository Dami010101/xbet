import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import './Footer.css';





const Footer = () => {
  return (
    <div id='contact_us'>
      {/* <div className=' md:flex md:justify-between md:items-start sm:text-center sm:px-12 px-4 bg-[#ffffff19] py-7 '> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 bg-[#212121] text-white'>
        <ul>
          <h2 className='mb-1 font-semibold'>USEFUL LINKS</h2>
          <li className='text-xs'><a href='/'>EPL PREDICTIONS</a></li>
          <li className='text-xs'><a href='/'>TODAYS PREDICTIONS</a></li>
          <li className='text-xs'><a href='/'>TOMORROWS PREDICTIONS</a></li>
          <li className='text-xs'><a href='/'>FPL</a></li>
          <li className='text-xs'><a href='/'>ABOUT US</a></li>
        </ul>
        <ul>
          <h2 className='mb-1 font-semibold'>SUPPORT CENTER</h2>
          <li className='text-xs'><a href='/'>CONTACT US</a></li>
          <li className='text-xs'><a href='/'>TERMS AND CONDITIONS</a></li>
          <li className='text-xs'><a href='/'>PRIVACY POLICY</a></li>
          <li className='text-xs'><a href='/'>SUBSCRIBE</a></li>
          <li className='text-xs'><a href='/'>ABOUT US</a></li>
        </ul>

        <ul>
          <h2 className='mb-1 font-semibold'>CONTACT US</h2>
          <li className='text-xs' ><a href='/'><div className='flex items-center gap-2'><div><FaPhoneAlt /></div><div>PHONE: +1230 123 1231.</div></div></a></li>
          <li className='text-xs'><a href='/'><div className='flex items-center gap-2'><div><MdEmail /></div><div>EMAIL: info@xbet.com</div></div></a></li>
          <li className='text-xs'><a href='/'><div className='flex items-center gap-2'><div><FaGlobe /></div><div>WEBSITE: www.Xbet.com</div></div></a></li>
       </ul>

       <ul>
       
          <li className='lisp'><a href='/'><span>x</span><span>Bet</span></a></li>
          <li>&copy; Footer</li>

        </ul>
      </div>
    </div>
  )
}

export default Footer