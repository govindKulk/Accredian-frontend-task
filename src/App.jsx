import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabGroup from './components/Navbar/TabGroup'
import Hero from './components/herosection/Hero'
import FormModal from './components/herosection/FormModal'

function App() {


  return (
    <div className='text-4xl font-bold max-w-screen-lg mx-auto
    space-y-4 px-4 sm:px-0'>
      <TabGroup/>
      <Hero/>
      <FormModal/>
    </div>
  )
}

export default App
