import { Button } from '@mui/material'
import React from 'react'

const HeroContent = () => {
  return (
    <div className='space-y-8'>
      <p className='font-bold text-[88px] leading-[88px]'>Let's learn and earn.</p>
      <p className='text-2xl font-light'>Get a chance to win up to  
        <span className='text-blue-500 font-semibold'> 
        {" "} Rs.15,000
        </span></p>

      <Button variant='contained'>Refer Now</Button>
    </div>
  )
}

export default HeroContent
