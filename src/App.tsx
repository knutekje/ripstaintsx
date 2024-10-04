import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Heading, Stack } from '@chakra-ui/react'
import ReportList from './Components/ReportList'
import Navbar from './Components/NavBar'
import ReportForm from './Components/ReportForm'

function App() {

  return (
    <>
    <Stack h="100vh" justifyContent="center" alignItems="center">
        <div>
          <Navbar />
          <ReportForm/>
    </div>
    <ReportList />
    </Stack>
    </>
  
  )
}

export default App
