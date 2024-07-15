import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import LoginModal from '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModal'

const Root = () => {
  return (
    <div>
      <Navbar/>
      <LoginModal/>
      <RegisterModal/>
      <Outlet/>
    </div>
  )
}

export default Root
