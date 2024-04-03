import React, { useEffect } from 'react'
import { BsFillBookmarkStarFill } from "react-icons/bs";
import './Features.css';
import featpic from '../../asset/connor-coyne-OgqWLzWRSaI-unsplash.jpg'
import { FaWheelchairMove } from "react-icons/fa6";
import footie from '../../asset/Bacca.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Features = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <div id='featured_picks'>
        <div className='feat'>
        <BsFillBookmarkStarFill size={20} className='bm' color='#FF4500'/>
        <h4 className='py-3 '>FEATURED PICKS</h4>
            <p>X-predict Lorem ipsum dolo
                r sit amet consectetur adipisicing elit. Sequi labore,<br/>harum
                 officiis error quia cupiditate?</p>
        </div>
        <div className='featpika'>
            <div data-aos='slide-right'>
                <img  src={featpic} className='w-60 h-full	px-3'/>
            </div>
            <div>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>CHELSEA - SPURS 2X</p>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>WATFORD - CHELSEA 1</p>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>WATFORD - WESTHAM 2HH</p>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>WATFORD - CHELSEA O2.5</p>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>WATFORD - CHELSEA Home win</p>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>WATFORD - CHELSEA 2HH</p>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>WATFORD - CHELSEA 2HH</p>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>WATFORD - CHELSEA 2HH</p>
                <p className='flex py-3'><span><FaWheelchairMove size={20}/></span>WATFORD - CHELSEA 2HH</p>
            </div>
        </div>


    {/* <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${footie})`}} title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div> */}

    </div>
  )
}

export default Features