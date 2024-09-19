import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Stack } from '@chakra-ui/react'
import ReportList from './Components/ReportList'

function App() {

  return (
    <>
    <Stack h="100vh" justifyContent="center" alignItems="center">
    <div>
    <h1>Hello World</h1>
    </div>
    <ReportList />
    </Stack>
    </>
  
  )
}

export default App
