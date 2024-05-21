import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Find_Job from "./pages/Find_Job"
import Company from "./pages/Company"
import Candidate from "./pages/Candidate"
import Career_Advice from "./pages/Career_Advice"
import Contact_Us from "./pages/Contact_Us"
import Login from "./pages/Login"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="find_job" element={<Find_Job />} />
            <Route path="company" element={<Company />} />
            <Route path="candidate" element={<Candidate />} />
            <Route path="career_advice" element={<Career_Advice />} />
            <Route path="contact_us" element={<Contact_Us />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1 className="text-3xl font-bold p-7 text-center">Error 404 Page Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
