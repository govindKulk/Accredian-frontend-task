
import '../App.css'
import TabGroup from '../components/Navbar/TabGroup'
import Hero from '../components/herosection/Hero'
import FormModal from '../components/modals/FormModal'
import { Alert, Snackbar } from '@mui/material'
import FlowSection from '../components/herosection/FlowSection'

function App() {


  return (

    <div className='space-y-4'>
      <div className='text-4xl font-bold max-w-screen-lg mx-auto
    space-y-4 px-4 '>
        <TabGroup />
        <Hero />
        <FormModal />

      </div>
      <FlowSection />

    </div>

  )
}

export default App
