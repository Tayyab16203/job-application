
const Login = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full h-screen font-sans">
        <div className="max-w-[550px] w-full z-[99] h-fit overflow-auto bg-[#fff] rounded-[5px] shadow-[0_0px_10px_rgba(0,0,0,0.2)] transition-all ease-in-out duration-300 transform scale-100 opacity-100 visible">
            {/* top text and button */}
            <div className="flex justify-between items-center px-10 py-4 border-b border-[#ebebeb]">
                <h4 className="text-4xl font-medium text-[#000]">Login</h4>
                <div className="p-[15px] bg-[#000] rounded-[5px] cursor-pointer hover:bg-green-600 duration-300 ease-in-out">
                    <svg className="text-[#fff] w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            {/* main dev */}
            <div className="px-10 pt-10 pb-6">
                <form>
                    {/* username */}
                    <div className="mb-6">
                        <label htmlFor='email' className="block mb-2 text-gray-500 font-normal">Username</label>
                        <input className="appearance-none block w-full !p-3 leading-5 text-gray-500 border border-gray placeholder:font-normal placeholder:text-xss rounded-lg placeholder-gray-500 focus:outline-none " type="email" id='email'name='email' placeholder="Enter Your Username" />
                    </div>
                    {/* password */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-500 font-normal" htmlFor="password">Password</label>
                        <input className="appearance-none block w-full !p-3 leading-5 text-gray-500 border border-gray placeholder:font-normal placeholder:text-xss rounded-lg placeholder-gray-500 focus:outline-none " type="Password" id="password" placeholder="Enter Your Password" />
                    </div>
                    <div className="flex flex-wrap items-center justify-between mb-6">
                        {/* checkbox  */}
                        <div className="w-full md:w-1/2">
                            <label className="relative inline-flex items-center">
                                <input className="checked:bg-red-500 w-4 h-4" type="checkbox" name="remember"/>
                                <span className="ml-3 text-md text-gray-500 font-normal">Remember me</span>
                            </label>
                        </div>
                        <div className="w-full md:w-auto mt-1">
                            <button type="button" className="inline-block text-md font-normal text-green-600 hover:text-green-600 hover:underline">
                                Lost password?
                            </button>
                        </div>
                    </div>
                    <button className="flex gap-2 items-center justify-center !py-3 px-7 duration-300 ease-in-out mb-6 w-full text-base text-white font-normal text-center leading-6 bg-green-600 rounded-md hover:bg-black" type="submit">Login</button>
                </form>
                {/* end dev */}
                <p className="text-center flex flex-wrap items-center justify-center gap-3">
                    <span className="text-md text-deep font-normal">Not a Member?</span>
                    <button className="inline-block text-md font-normal text-green-600 hover:text-green-600 hover:underline">Create Account</button>
                </p>
            </div>
        </div>
        {/* full dev */}
        <div className="fixed top-0 left-0 w-full h-full z-[95] bg-[#0000008f]"></div>
    </div>
    </>
  )
}

export default Login
