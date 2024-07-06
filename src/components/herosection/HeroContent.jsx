import { Button } from '@mui/material'
import React from 'react'
import useModalStore from '../../hooks/useModalStore'

const HeroContent = () => {

  const {openModal} = useModalStore()
  return (
    <div className='space-y-8'>
      <p className='font-bold text-[30px] sm:text-[44px] md:text-[88px] leading-[normal] md:leading-[88px]'>Let's learn and earn.</p>
      <p className='text-2xl font-light'>Get a chance to win up to  
        <span className='text-blue-500 font-semibold'> 
        {" "} Rs.15,000
        </span></p>

      <Button variant='contained' onClick={() => openModal()}>Refer Now</Button>
    </div>
  )
}

export default HeroContent
