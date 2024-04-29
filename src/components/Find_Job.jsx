import back_pic from "./assets/findjobPagePic/back_pic.jpeg"
import map_pin1 from "./assets/findjobPagePic/section2/map-pin1.svg"
import doller_sign3 from "./assets/findjobPagePic/section2/dollar-sign3.svg"
import clock1 from "./assets/findjobPagePic/section2/clock1.svg"
import avatar_pic from "./assets/findjobPagePic/section2/avatar.webp"
import customer1 from "./assets/findjobPagePic/section2/Customer1.webp"
import customer2 from "./assets/findjobPagePic/section2/customer2.webp"
import customer3  from "./assets/findjobPagePic/section2/customer3.png"
import customer4 from "./assets/findjobPagePic/section2/Customer4.webp"
const Find_Job = () => {
  return (
    <>
    <main>
        {/* section 1 */}
        <section className="relative bg-cover bg-center bg-no-repeat font-sans" style={{backgroundImage: `url(${back_pic})`}}>
            <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,124,50,0.7)] z-2">
            </div>
            <div className="p-16 xl:max-w-[1380px] mx-auto">
                <div className="w-10/12 m-auto z-4 relative pt-10 pb-7">
                    <div className="text-center">
                        <h1 className="text-white text-[45px] xl:text-[64px] font-bold text-center leading-none mb-6 ">
                            Find Your Dream Job
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        {/* section 2 */}
        <section className="pt-14 pb-20 !bg-gray-200 font-sans">
            <div className="px-4 py-2 xl:max-w-[1380px] mx-auto">
                <div className="xl:grid grid-cols-12 gap-6">
                    {/* 1st side*/}
                    <div className="col-span-3">
                        <div className="bg-white rounded-lg">
                            <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
                                <p className="text-[16px] leading-4 text-black font-bold">Search Filter</p>
                            </div>
                            {/* form */}
                            {/* search section */}
                            <div className="p-6">
                                <form className="border-b border-gray">
                                    <div className="mb-4">
                                        <input  type="text" className="bg-gray-200 rounded-md w-full text-gray-600 text-base py-3 px-6 leading-tight focus:outline-none" name="jobTitle" placeholder="Job Title or Keyword" />
                                    </div>
                                    <div className="mb-4">
                                        <input  type="text" className="bg-gray-200 rounded-md w-full text-gray-600 text-base py-3 px-6 leading-tight focus:outline-none" name="jobTitle" placeholder="Location" />
                                    </div>
                                    <div className="jobCategorise pb-4">
                                        <select aria-label="Categories" name="category" className="border-0 focus:shadow-none h-[52px] bg-gray-200 text-[18px] text-gray-400 text-base font-normal focus-visible:white focus:outline-none w-full px-2  rounded-md">
                                            <option value>Select Categories</option>
                                            <option value="Bank 1">Bank 1</option>
                                            <option value="Commercial/Supply">Commercial/supply</option>
                                            <option value="Construction.Facilities">Construction.facilities</option>
                                            <option value="Design/Creative">Design/creative</option>
                                            <option value="Education Training">Education training</option>
                                            <option value="Engineer/Architects">Engineer/architects</option>
                                            <option value="Hospitality/Travel">Hospitality/travel</option>
                                            <option value="Electrition/Repair">Electrition/repair</option>
                                            <option value="Marketing/Sales">Marketing/sales</option>
                                            <option value="It/Telecommunication">It/telecommunication</option>
                                            <option value="Accounting/Finance">Accounting/finance</option>
                                            <option value="MERN">Mern</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            {/* checkbox and job section */}
                            <div className="collapsed-group mb-4">
                                {/* 1st checkboxes*/}
                                <div className="mb-2">
                                    <div className="px-6 flex items-center justify-between">
                                        <div>
                                            <p className="text-[16px] font-bold text-black leading-4">Job Type</p>
                                        </div>
                                    </div>
                                    <div className="collapsed-item px-6 py-4">
                                        <div className="border-b border-gray">
                                            <div className="mb-3 w-full relative">
                                                <div className="w-full">
                                                    <div className="text-gray-400 flex items-center gap-3">
                                                        <input type="checkbox" id="contact Base-5" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                        <label htmlFor="contact Base-5" className="w-full cursor-pointer text-base leading-[18px]">Contact base</label>
                                                    </div>
                                                </div>
                                                <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">5</span>
                                            </div>
                                            <div className="mb-3 w-full relative">
                                                <div className="w-full">
                                                    <div className="text-gray-400 flex items-center gap-3">
                                                        <input type="checkbox" id="Freelance-9" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                        <label htmlFor="Freelance-9" className="w-full cursor-pointer text-base leading-[18px]">Freelance</label>
                                                    </div>
                                                </div>
                                                <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">9</span>
                                            </div>
                                            <div className="mb-3 w-full relative">
                                                <div className="w-full">
                                                    <div className="text-gray-400 flex items-center gap-3">
                                                        <input type="checkbox" id="Full Time-1" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                        <label htmlFor="Full Time-1" className="w-full cursor-pointer text-base leading-[18px]">Full Time</label>
                                                    </div>
                                                </div>
                                                <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">15</span>
                                            </div>
                                            <div className="mb-3 w-full relative">
                                                <div className="w-full">
                                                    <div className="text-gray-400 flex items-center gap-3">
                                                        <input type="checkbox" id="Internship-5" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                        <label htmlFor="Internship-5" className="w-full cursor-pointer text-base leading-[18px]">Internship</label>
                                                    </div>
                                                </div>
                                                <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">5</span>
                                            </div>
                                            <div className="mb-3 w-full relative">
                                                <div className="w-full">
                                                    <div className="text-gray-400 flex items-center gap-3">
                                                        <input type="checkbox" id="Part-time-8" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                        <label htmlFor="Part-time-8" className="w-full cursor-pointer text-base leading-[18px]">Part time</label>
                                                    </div>
                                                </div>
                                                <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">8</span>
                                            </div>
                                            <div className="mb-3 w-full relative">
                                                <div className="w-full">
                                                    <div className="text-gray-400 flex items-center gap-3">
                                                        <input type="checkbox" id="Remote-3" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                        <label htmlFor="Remote-3" className="w-full cursor-pointer text-base leading-[18px]">Remote</label>
                                                    </div>
                                                </div>
                                                <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">3</span>
                                            </div>
                                            <div className="mb-3 w-full relative">
                                                <div className="w-full">
                                                    <div className="text-gray-400 flex items-center gap-3">
                                                        <input type="checkbox" id="Temporary-2" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                        <label htmlFor="Temporary-2" className="w-full cursor-pointer text-base leading-[18px]">Temporary</label>
                                                    </div>
                                                </div>
                                                <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 2nd checkboxes*/}
                                <div className="mb-2">
                                    <div className="px-6 flex items-center justify-between">
                                        <div>
                                            <p className="text-[16px] font-bold text-black leading-4">Experience</p>
                                        </div>
                                    </div>
                                    <div className="collapsed-item px-6 py-4">
                                    <div className="mb-3 w-full relative">
                                        <div className="w-full">
                                                <div className="text-gray-400 flex items-center gap-3">
                                                    <input type="checkbox" id="0" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                    <label htmlFor="0" className="w-full cursor-pointer text-base leading-[18px]">+ Years</label>
                                                </div>
                                            </div>
                                            <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">12</span>
                                        </div>
                                        <div className="mb-3 w-full relative">
                                            <div className="w-full">
                                                <div className="text-gray-400 flex items-center gap-3">
                                                    <input type="checkbox" id="31" className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none" />
                                                    <label htmlFor="31" className="w-full cursor-pointer text-base leading-[18px]">3+ years</label>
                                                </div>
                                            </div>
                                            <span className="text-[16px] text-gray-500 font-normal top-0 right-0 absolute">6</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd side*/}
                    <div className="col-span-9">
                        {/* 2nd side top dev bar */}
                        <div className="bg-white py-2 rounded-md md:flex flex-wrap justify-between items-center mb-6 md:py-2">
                            <p className="text-[16px] text-black font-bold leading-4 px-6 mb-6 md:mb-0">
                                We have Found <span className="text-green-600">32</span> jobs
                            </p>
                            <div className="px-2">
                                <select aria-label="Default select example" name="sortBy" className="border-0 focus:shadow-none w-40 py-2 bg-gray-100 text-[18px] text-gray-500 text-base font-normal focus-visible:white focus:outline-none svg_icon px-2">
                                    <option value>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                    <option value="featured">Featured</option>
                                </select>
                            </div>
                        </div>
                        {/* grid dev system */}
                        <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 justify-center">
                            {/* 1 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-purple-500 bg-purple-100 py-1 px-2.5 rounded-sm">Part time</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={avatar_pic} className="w-[100px] h-[100px]" alt="avater_pic " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Warhouse Operative Need</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        Oslo, Norway
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-green-600 border-solid transition-all hover:border-green-600">
                                {/* star dev */}
                                <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-mediem -top-[33px] -right-[33px]  w-[66px] h-[66px] ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                    </svg>
                                </div>
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-blue-500 bg-blue-100 py-1 px-2.5 rounded-sm">Full time</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer1} className="w-[100px] h-[100px]" alt="avater_pic " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Billing Suport specialist job</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        Anywhere
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-orange-500 bg-orange-100 py-1 px-2.5 rounded-sm">Freelance</span>
                                    <span className="text-[14px] font-normal text-purple-500 bg-purple-100 py-1 px-2.5 rounded-sm">Part time</span>
                                    <span className="text-[14px] font-normal text-green-500 bg-green-100 py-1 px-2.5 rounded-sm">Contact base</span>
                                    <span className="text-[14px] font-normal text-red-500 bg-red-100 py-1 px-2.5 rounded-sm">internship</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={avatar_pic} className="w-[100px] h-[100px]" alt="avater_pic " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">CEO</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        Patary
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-blue-500 bg-blue-100 py-1 px-2.5 rounded-sm">full time</span>
                                    <span className="text-[14px] font-normal text-green-500 bg-green-100 py-1 px-2.5 rounded-sm">Contact base</span>
                                    <span className="text-[14px] font-normal text-red-500 bg-red-100 py-1 px-2.5 rounded-sm">internship</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer2} className="w-[100px] h-[100px]" alt="avater_pic " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">CSS, Expert Online Developer</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        Paris, France
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* 5 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-blue-500 bg-blue-100 py-1 px-2.5 rounded-sm">full time</span>
                                    <span className="text-[14px] font-normal text-red-500 bg-red-100 py-1 px-2.5 rounded-sm">internship</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={avatar_pic} className="w-[100px] h-[100px]" alt="avater_pic " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Company Testing</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        khulna
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* 6 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-green-600 border-solid transition-all hover:border-green-600">
                                {/* star dev */}
                                <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-mediem -top-[33px] -right-[33px]  w-[66px] h-[66px] ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                    </svg>
                                </div>
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-cyan-500 bg-cyan-100 py-1 px-2.5 rounded-sm">Remote</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer1} className="w-[100px] h-[100px]" alt="avater_pic " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Company identity Analyst</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        Ryanland
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* 7 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-cyan-500 bg-cyan-100 py-1 px-2.5 rounded-sm">Remote</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={avatar_pic} className="w-[100px] h-[100px]" alt="avater_pic " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">District matric Architect</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        Anywhere
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* 8 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-green-600 border-solid transition-all hover:border-green-600">
                                {/* star dev */}
                                <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-mediem -top-[33px] -right-[33px]  w-[66px] h-[66px] ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                    </svg>
                                </div>
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-cyan-500 bg-cyan-100 py-1 px-2.5 rounded-sm">Remote</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer3 } className="w-[100px] h-[100px]" alt="avater_pic " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">District Responce manager</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        Bloomington
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* 9 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* job type */}
                                <span className="flex flex-wrap gap-2 left-0">
                                    <span className="text-[14px] font-normal text-blue-500 bg-blue-100 py-1 px-2.5 rounded-sm">Full time</span>
                                </span>
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer4} className="w-[100px] h-[100px]" alt="avater_pic" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Forward branding Coordinate</h3>
                                    <div className="flex gap-2 justify-center items-center text-gray-500 text[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} alt="" />
                                            </span>
                                        </div>
                                        Wistfield
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* price and year section */}
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                25k - 45k Taka
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-[14px] font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={clock1} alt="" />
                                                    </span>
                                                </div>
                                                2 Years ago
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Find_Job
