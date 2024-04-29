import { BrowserRouter, Routes, Route} from  "react-router-dom"
import Navbar from "./Navbar"
import Home from "./components/Home"
import Footer from "./Footer"
import Find_Job from "./components/Find_Job"
import Company from "./components/Company"
import Candidate from "./components/Candidate"
import Career_Advice from "./components/Career_Advice"
import Contact_Us from "./components/Contact_Us"
import Login from "./components/Login"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="find_job" element={<Find_Job/>}/>
            <Route path="company" element={<Company/>}/>
            <Route path="candidate" element={<Candidate/>}/>
            <Route path="career_advice" element={<Career_Advice/>}/>
            <Route path="contact_us" element={<Contact_Us/>}/>
          </Route>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<h1 className="text-3xl font-bold p-7 text-center">Error 404 Page Not Found</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
