
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage'
import VerifyPage from './Verify/VerifyPage'
import ReportPage from './Report/ReportPage'

function App() {

  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
            <Route index element={<VerifyPage />} />
            <Route path="ReportPage" element={<ReportPage />} />
            <Route path="VerifyPage" element={<VerifyPage />} />
            
     
        </Route>
      </Routes>
    </Router>
     
    </>
  
  )
}

export default App
