import { Button } from '@mui/material'
import React, { useContext } from 'react'

import { AuthContext } from '../../Context'
import useModalStore from '../../hooks/useModalStore'

const HeroContent = () => {


  const {openModal} = useModalStore()

  const {isLoggedin} = useContext(AuthContext);
  console.log(isLoggedin, "isLoggedin")
  const handleReferModal = () => {
    if(isLoggedin){
      openModal('referral')
    } else {
      openModal("login")
    }
  }
  return (
    <div className='space-y-8 z-[20]'>
      <p className='font-bold text-[30px] sm:text-[44px]  lg:text-[88px] leading-[normal] md:leading-[88px]'>Let's learn and earn.</p>
      <p className='text-2xl font-light'>Get a chance to win up to  
        <span className='text-blue-500 font-semibold'> 
        {" "} Rs.15,000
        </span></p>

      <Button variant='contained' onClick={handleReferModal}>{isLoggedin ? "Refer Now" : "Login"}</Button>
    </div>
  )
}

export default HeroContent
