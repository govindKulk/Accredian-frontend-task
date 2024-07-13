import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import LoginModal from '../components/herosection/LoginModal'

const Root = () => {
  return (
    <div>
      <Navbar/>
      <LoginModal/>
      <Outlet/>
    </div>
  )
}

export default Root
