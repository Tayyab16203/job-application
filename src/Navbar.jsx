import { useState } from "react"
import { NavLink } from "react-router-dom"
import navLogo from "./components/assets/logo.svg"
import navLogo_sm from "./components/assets/logo-sm.svg"
import Login from "./components/Login"

const Navbar = () => {
  let [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  return (
    <>
    <header className="shadow-sm bg-white z-5">
      <nav className="xl:max-w-[1380px] mx-auto">
        <div className='p-5 flex justify-between items-center sans-serif text-base'>
            {/* logo */}
            <div className="flex items-center">
              <a className="hidden sm:flex" href="/">
                <div className="mb-[-7px]">
                  <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                    <img src={navLogo} alt="" />
                  </span>
                </div>
              </a>
              <a className="flex sm:hidden" href="/">
              <div className="mb-[-7px]">
                  <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                    <img src={navLogo_sm} alt="" />
                  </span>
                </div>
              </a>
            </div> 
            {/* items */}
            <div className=" lg:block xs:hidden">
              <ul className='flex gap-7 xl:gap-9 text-gray-600'>
                <li><NavLink to='/' className={'font-medium text-[16px] hover:text-green-600 focus:text-green-600 transition-all'}>Home</NavLink></li>
                <li><NavLink to='/find_job' className={'font-medium text-[16px] hover:text-green-600 focus:text-green-600 transition-all'}>Find Job</NavLink></li>
                <li><NavLink to='/company' className={'font-medium text-[16px] hover:text-green-600 focus:text-green-600 transition-all'}>Campany</NavLink></li>
                <li><NavLink to='/candidate' className={'font-medium text-[16px] hover:text-green-600 focus:text-green-600 transition-all'}>Candidate</NavLink></li>
                <li><NavLink to='/career_advice' className={'font-medium text-[16px] hover:text-green-600 focus:text-green-600 transition-all'}>Career Advice</NavLink></li>
                <li><NavLink to='/contact_us' className={'font-medium text-[16px] hover:text-green-600 focus:text-green-600 transition-all'}>Contact Us</NavLink></li>
              </ul>
            </div>
            {/* buttons */}
            <div className='flex gap-3 items-center'>
              <NavLink to='/login'><button className='py-2 px-3 bg-black text-white font-medium rounded-md block cursor-pointer outline-none transition-all hover:bg-green-600'>Sign In</button></NavLink>
              <button className='py-2 px-3 bg-green-600 text-white font-medium rounded-md  md:block xs:hidden cursor-pointer outline-none transition-all hover:bg-black'>Sign Up</button>
              {/* menu-bar icon */}
              <div className="mobile-toggle flex lg:hidden xs:block hover:cursor-pointer transition-all ease-in-out" onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
              </div>
            </div> 
        </div>
        {/* resposive menu-bar dev */}
        <div className={`fixed lg:hidden w-full h-full top-0 z-[100] transition-all duration-500 ease-in-out ${menuBarIsOpen ? "left-0" : "-left-full"}`}>
            {/* menu_bar items dev */}
            <div className={`text-white absolute top-0 z-[110] bg-[rgba(0,_0,_0,_0.6)] backdrop-blur-[10px] h-full w-full max-w-[400px] ${menuBarIsOpen ? "left-0" : "-left-full"}`}>
              {/* close button of menu_bar */}
              <div className="h-[60px]">
                <div className="cursor-pointer absolute top-4 right-5" onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-[30px] h-[30px] text-[#f2f5f8] transition ease-in-out duration-500 hover:text-[#ff0000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </div>
              </div>
              {/* menu_bar items */}
              <div>
                <ul className='flex flex-col mt-6'>
                    <li className="flex items-center"><NavLink to='/' className={'text-light text-xxs py-3.5 px-4 border-b border-deep hover:border-green-600 focus:border-green-600 w-full hover:text-green-600 focus:text-green-600 transition-all'} onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}>Home</NavLink></li>
                    <li className="flex items-center"><NavLink to='/find_job' className={'text-light text-xxs py-3.5 px-4 border-b border-deep hover:border-green-600 focus:border-green-600 w-full hover:text-green-600 focus:text-green-600 transition-all'} onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}>Find Job</NavLink></li>
                    <li className="flex items-center"><NavLink to='/company' className={'text-light text-xxs py-3.5 px-4 border-b border-deep hover:border-green-600 focus:border-green-600 w-full hover:text-green-600 focus:text-green-600 transition-all'} onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}>Campany</NavLink></li>
                    <li className="flex items-center"><NavLink to='/candidate' className={'text-light text-xxs py-3.5 px-4 border-b border-deep hover:border-green-600 focus:border-green-600 w-full hover:text-green-600 focus:text-green-600 transition-all'} onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}>Candidate</NavLink></li>
                    <li className="flex items-center"><NavLink to='/career_advice' className={'text-light text-xxs py-3.5 px-4 border-b border-deep hover:border-green-600 focus:border-green-600 w-full hover:text-green-600 focus:text-green-600 transition-all'} onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}>Career Advice</NavLink></li>
                    <li className="flex items-center"><NavLink to='/contact_us' className={'text-light text-xxs py-3.5 px-4 border-b border-deep hover:border-green-600 focus:border-green-600 w-full hover:text-green-600 focus:text-green-600 transition-all'} onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}>Contact Us</NavLink></li>
                </ul>
              </div>
              <div className="flex justify-center p-5 w-full items-center">
              <button className='py-2 px-3 bg-green-600 text-white font-medium rounded-md  md:hidden xs:block cursor-pointer outline-none transition-all hover:bg-black'>Sign Up</button>
              </div>
            </div>
            {/* full dev */}
            <div className={`absolute w-full h-full top-0 left-0 transition-all duration-500 ease-in-out bg-[rgba(0,_0,_0,_0.5)] cursor-pointer`} onClick={() => setMenuBarIsOpen(!menuBarIsOpen)}></div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar
