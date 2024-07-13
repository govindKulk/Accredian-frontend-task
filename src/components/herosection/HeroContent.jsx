import { Button } from '@mui/material'
import React, { useContext } from 'react'
import useModalStore from '../../hooks/useModalStore'
import { AuthContext } from '../../Context'
import useLoginModal from '../../hooks/useLoginModal'

const HeroContent = () => {

  const {openModal} = useModalStore()
  const {openModal: openLoginModal} = useLoginModal()

  const {isLoggedIn} = useContext(AuthContext);
  const handleReferModal = () => {
    if(isLoggedIn){
      openModal()
    } else {
      openLoginModal()
    }
  }
  return (
    <div className='space-y-8 z-[20]'>
      <p className='font-bold text-[30px] sm:text-[44px]  lg:text-[88px] leading-[normal] md:leading-[88px]'>Let's learn and earn.</p>
      <p className='text-2xl font-light'>Get a chance to win up to  
        <span className='text-blue-500 font-semibold'> 
        {" "} Rs.15,000
        </span></p>

      <Button variant='contained' onClick={handleReferModal}>{isLoggedIn ? "Refer Now" : "Login"}</Button>
    </div>
  )
}

export default HeroContent
