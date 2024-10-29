import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import VerifyPage from "./Verify/VerifyPage";
import ReportPage from "./Report/ReportPage";
import StatsPage from "./Statistics/StatsPage";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { useAuth } from "./Components/AuthProvider";
import { Text } from "@chakra-ui/react";

export const url = "http://localhost:5172";

function App() {
	const { currentUser } = useAuth();

 
  return (
    <>
      {currentUser ? <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<VerifyPage />} />
            <Route path="ReportPage" element={<ReportPage />} />
            <Route path="VerifyPage" element={<VerifyPage />} />
            <Route path="StatsPage" element={<StatsPage />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<SignIn/>}/>
          </Route>
        </Routes>
      </Router> : <SignIn/>}
      
   {/*    <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<VerifyPage />} />
            <Route path="ReportPage" element={<ReportPage />} />
            <Route path="VerifyPage" element={<VerifyPage />} />
            <Route path="StatsPage" element={<StatsPage />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<SignIn/>}/>
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
