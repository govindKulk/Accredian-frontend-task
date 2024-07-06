import React from 'react'
import HeroContent from './HeroContent'
import Money from './Money'

const Hero = () => {
  return (
    <div className='grid sm:grid-cols-2  bg-[rgba(238,245,255,1)]
    p-8
    rounded-3xl
    relative
    shadow-hero
    justify-center
    h-full
    place-items-center
    overflow-hidden
    '>
      <Money rotate={"180deg"} left={"-5px"} top={"-5px"}/>
      <Money rotate={"270deg"} right={"-5px"} top={"-5px"}/>
      <Money rotate={"360deg"} right={"5px"} top={"50%"}/>
      <HeroContent />
      <div className='h-full sm:h-[400px] w-full sm:w-[450px] -order-1 sm:order-1 flex justify-center relative'>
        <img className="h-full " src="hero.png" />
        <Money left={"50px"} bottom={"50px"} right={'unset'} top={"unset"}/>
        <Money left={"140px"} bottom={"unset"} right={'unset'} top={"10px"} rotate={"240deg"}/>
      </div>
    </div>
  )
}

export default Hero
