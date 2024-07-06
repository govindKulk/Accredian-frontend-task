import React from 'react'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 bg-[rgba(238,245,255,1)]
    p-8
    rounded-3xl
    
    shadow-hero
    justify-center
    h-full
    '>
      <HeroContent />
      <div className='max-h-[400px] flex justify-center'>
        <img className="h-full " src="hero.png" />

      </div>
    </div>
  )
}

export default Hero
