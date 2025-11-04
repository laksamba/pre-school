import React from 'react'

import Hero from '../pages/Hero'
import Detail from '../pages/Detail'
import { AboutUs } from '../components/AboutUs'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-20'>
    
    <Hero/>
    <Detail/>
    <div className='bg-orange-900 h-4 ml-12'> <hr className='border-3 border-yellow-400' /></div>
    <AboutUs/>
    </div>
  )
}

export default LandingPage