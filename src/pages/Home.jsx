import banner_home from "/homeSection1pic/banner_home.jpg"
import search_icon from "/homeSection1pic/search_icon.png"
import location_icon from "/homeSection1pic/location_icon.png"
import job_pic from "/homeSection1pic/job_pic.svg"
import company_logo from "/homeSection1pic/company_logo.svg"
import employee_logo from "/homeSection1pic/employee_logo.svg"
import pic1 from "/homeSection3pic/pic1.webp"
import map_pin1 from "/homeSection3pic/map-pin1.svg"
import dollar_sign3 from "/homeSection3pic/dollar-sign3.svg"
import clock1 from "/homeSection3pic/clock1.svg"
import blog_img1 from "/homeSection5pic/blog-img-1.webp"
import blog_img2 from "/homeSection5pic/blog-img-2.webp"
import blog_img3 from "/homeSection5pic/blog-img-3.webp"
import CATEGORIES from "./catergory/categories"
import Category from "./catergory/category"

const Home = () => {
  return (
    <>
      <main>
        {/* 1st section */}
        <section className="py-16 md:py-20 lg:py-24 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner_home})` }}>
          {/* background color */}
          <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,124,50,0.7)] z-2"></div>
          <div className="px-4 py-2 xl:max-w-[1380px] mx-auto font-sans">
            <div className="w-10/12 m-auto z-4 relative">
              {/* text container */}
              <div className="text-center">
                <h1 className="text-white text-center text-[45px] xl:text-[64px] font-bold leading-none mb-3">
                  Find Your Dream Job <br className="hidden xl:inline" /> With Brand Name
                </h1>
                <p className="text-lg text-white font-normal leading-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br className="hidden xl:inline" /> Possimus id ea rem obcaecati unde esse dignissimos.
                </p>
              </div>
              {/* form */}
              <div className="search-wrapper my-10 p-2 rounded-2xl bg-[rgba(121,184,151,0.5)]">
                <form>
                  <div className="bg-white overflow-hidden rounded-xl md:grid gap-7 lg:gap-10 grid-cols-8 xl:grid-cols-7 items-center">
                    <div className="col-span-2 px-4 md:px-0 md:pl-4 border-r-2 border-gray h-full flex items-center">
                      <input type="text" className="w-full block !pr-3 py-4 border-b-2 border-gray md:border-0 md-py-4 focus:outline-none bg-left bg-no-repeat px-8 placeholder:text-[rgb(102,115,127)]" placeholder="Job Title" name="jobTitle" style={{ backgroundImage: `url(${search_icon})` }} />
                    </div>
                    <div className="col-span-2 px-4 md:px-0 md:pl-4 border-r-2 border-gray h-full flex items-center">
                      <input type="text" className="w-full block !pr-3 py-4 border-b-2 border-gray md:border-0 md-py-4 focus:outline-none bg-left bg-no-repeat px-8 placeholder:text-[rgb(102,115,127)]" placeholder="Location" name="location" style={{ backgroundImage: `url(${location_icon})` }} />
                    </div>
                    <div className="col-span-2 px-4 md:!px-0">
                      <select className="border-0 focus:shadow-none py-3 select2-init text-xxs text-[rgb(102,115,127)] font-normal focus-visible:white focus:outline-none w-full" aria-label="Default select example" name="category">
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
                    <div className="col-span-2 btn-banner xl:col-span-1 px-4 md:!px-0 py-4 md:!py-2 text-center grid md:justify-end lg:text-right mr-4">
                      <button type="submit" className="md:w-28 block bg-green-600 text-white px-4 py-3 text-md font-medium rounded-md outline-none hover:bg-black">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* job availible details */}
              <div className="grid gap-8 xl:gap-12 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
                <div className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                  <div className="flex mb-6 justify-center">
                    <div className="mb-[-7px]">
                      <span className="border-box inline-block  bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                        <img src={job_pic} alt="img" />
                      </span>
                    </div>
                  </div>
                  <h1 className="text-black text-[34px] font-bold leading-none mb-2">23 +</h1>
                  <p className="text-xl text-[rgb(102,115,127)] font-medium">JOB AVAILIBLE</p>
                </div>
                <div className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                  <div className="flex mb-6 justify-center">
                    <div className="mb-[-7px]">
                      <span className="border-box inline-block  bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                        <img src={company_logo} alt="img" />
                      </span>
                    </div>
                  </div>
                  <h1 className="text-black text-[34px] font-bold leading-none mb-2">6 +</h1>
                  <p className="text-xl text-[rgb(102,115,127)] font-medium">COMPANY</p>
                </div>
                <div className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                  <div className="flex mb-6 justify-center">
                    <div className="mb-[-7px]">
                      <span className="border-box inline-block  bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                        <img src={employee_logo} alt="img" />
                      </span>
                    </div>
                  </div>
                  <h1 className="text-black text-[34px] font-bold leading-none mb-2">3 +</h1>
                  <p className="text-xl text-[rgb(102,115,127)] font-medium">AVAILIBLE RESUMES</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 2nd section */}
        <section className="py-16 md:py-20 lg:py-25 !bg-gray-100 font-sans">
          <div className="px-4 py-2 xl:max-w-[1380px] mx-auto">
            {/* text dev */}
            <div className="text-center mb-14 ">
              <p className="text-green-600 font-bold text-[16px] leading-none mb-2">Populer Categories</p>
              <h2 className="text-black font-bold text-[32px]">Browse Top Categories</h2>
            </div>
            {/* section main dev */}
            <div className="grid gap-4 xl:gap-5 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
              {CATEGORIES.map((ct) =>
                (<Category data={ct} />)
              )}
            </div>
            <div className="text-center mt-14"><a className="text-white text-[16px] font-medium transition-all bg-gray-800 cursor-pointer px-6 py-2.5 rounded-lg hover:bg-green-600">Browse All Category</a></div>
          </div>
        </section>
        {/* 3rd section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white font-sans">
          <div className="px-4 py-2 xl:max-w-[1380px] mx-auto">
            {/* start text of section  */}
            <div className="text-center mb-14">
              <p className="text-green-600 font-bold text-[16px] leading-none mb-1">Recent Job</p>
              <h2 className="text-[32px] font-bold text-black">Popular Listed jobs</h2>
            </div>
            {/* main dev */}
            <div className="grid gap-6 xl:gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
              {/* 1 */}
              <div>
                <div className="group overflow-hidden relative h-full border-green-600 grid content-between px-6 !pt-4 pb-6 bg-white border border-solid transition-all rounded-md  hover:!border-green-600">
                  <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-medium w-[66px] h-[66px] -right-[33px] -top-[33px] z-[90]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                  <span className="flex flex-wrap gap-2 left-0">
                    <span className="bg-purple-100 py-1 px-2.5 rounded-sm text-[14px] font-normal text-purple-500">Part time</span>
                  </span>
                  {/* main image section */}
                  <div className="text-center !pt-5 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={pic1} alt="pic1" />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Vehicale Technition</h3>
                    <div className="flex gap-2 justify-center items-center text-gray-400 text-[14px] capitalize font-normal">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={map_pin1} alt="" />
                        </span>
                      </div>
                      Province of Cuneo, Italy
                    </div>
                  </div>
                  {/* end text of section */}
                  <div className="px-2">
                    <ul className="mb-4">
                      <li className="mb-2">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={dollar_sign3} alt="dollar" />
                            </span>
                          </div>
                          <p>15k - 35k Taka</p>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={clock1} alt="clock1" />
                            </span>
                          </div>
                          <p>2 years ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Apply Button */}
                  <div>
                    <a className="block text-center text-[16px] leading-4 text-gray-600 py-3 px-6 bg-slate-200 rounded-md group-hover:text-white group-hover:bg-green-600 transition-all" href="#">Apply Here</a>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div>
                <div className="group overflow-hidden relative h-full border-green-600 grid content-between px-6 !pt-4 pb-6 bg-white border border-solid transition-all rounded-md  hover:!border-green-600">
                  <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-medium w-[66px] h-[66px] -right-[33px] -top-[33px] z-[90]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                  <span className="flex flex-wrap gap-2 left-0">
                    <span className="bg-blue-100 py-1 px-2.5 rounded-sm text-[14px] font-normal text-blue-500">Full time</span>
                  </span>
                  {/* main image section */}
                  <div className="text-center !pt-5 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={pic1} alt="pic1" />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Vehicale Technition</h3>
                    <div className="flex gap-2 justify-center items-center text-gray-400 text-[14px] capitalize font-normal">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={map_pin1} alt="" />
                        </span>
                      </div>
                      Province of Cuneo, Italy
                    </div>
                  </div>
                  {/* end text of section */}
                  <div className="px-2">
                    <ul className="mb-4">
                      <li className="mb-2">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={dollar_sign3} alt="dollar" />
                            </span>
                          </div>
                          <p>15k - 35k Taka</p>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={clock1} alt="clock1" />
                            </span>
                          </div>
                          <p>2 years ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Apply Button */}
                  <div>
                    <a className="block text-center text-[16px] leading-4 text-gray-600 py-3 px-6 bg-slate-200 rounded-md group-hover:text-white group-hover:bg-green-600 transition-all" href="#">Apply Here</a>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div>
                <div className="group overflow-hidden relative h-full border-green-600 grid content-between px-6 !pt-4 pb-6 bg-white border border-solid transition-all rounded-md  hover:!border-green-600">
                  <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-medium w-[66px] h-[66px] -right-[33px] -top-[33px] z-[90]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                  <span className="flex flex-wrap gap-2 left-0">
                    <span className="bg-cyan-100 py-1 px-2.5 rounded-sm text-[14px] font-normal text-cyan-500">Remote</span>
                  </span>
                  {/* main image section */}
                  <div className="text-center !pt-5 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={pic1} alt="pic1" />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Vehicale Technition</h3>
                    <div className="flex gap-2 justify-center items-center text-gray-400 text-[14px] capitalize font-normal">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={map_pin1} alt="" />
                        </span>
                      </div>
                      Province of Cuneo, Italy
                    </div>
                  </div>
                  {/* end text of section */}
                  <div className="px-2">
                    <ul className="mb-4">
                      <li className="mb-2">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={dollar_sign3} alt="dollar" />
                            </span>
                          </div>
                          <p>15k - 35k Taka</p>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={clock1} alt="clock1" />
                            </span>
                          </div>
                          <p>2 years ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Apply Button */}
                  <div>
                    <a className="block text-center text-[16px] leading-4 text-gray-600 py-3 px-6 bg-slate-200 rounded-md group-hover:text-white group-hover:bg-green-600 transition-all" href="#">Apply Here</a>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div>
                <div className="group overflow-hidden relative h-full border-green-600 grid content-between px-6 !pt-4 pb-6 bg-white border border-solid transition-all rounded-md  hover:!border-green-600">
                  <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-medium w-[66px] h-[66px] -right-[33px] -top-[33px] z-[90]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                  <span className="flex flex-wrap gap-2 left-0">
                    <span className="bg-cyan-100 py-1 px-2.5 rounded-sm text-[14px] font-normal text-cyan-500">Remote</span>
                  </span>
                  {/* main image section */}
                  <div className="text-center !pt-5 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={pic1} alt="pic1" />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Vehicale Technition</h3>
                    <div className="flex gap-2 justify-center items-center text-gray-400 text-[14px] capitalize font-normal">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={map_pin1} alt="" />
                        </span>
                      </div>
                      Province of Cuneo, Italy
                    </div>
                  </div>
                  {/* end text of section */}
                  <div className="px-2">
                    <ul className="mb-4">
                      <li className="mb-2">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={dollar_sign3} alt="dollar" />
                            </span>
                          </div>
                          <p>15k - 35k Taka</p>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={clock1} alt="clock1" />
                            </span>
                          </div>
                          <p>2 years ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Apply Button */}
                  <div>
                    <a className="block text-center text-[16px] leading-4 text-gray-600 py-3 px-6 bg-slate-200 rounded-md group-hover:text-white group-hover:bg-green-600 transition-all" href="#">Apply Here</a>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div>
                <div className="group overflow-hidden relative h-full border-green-600 grid content-between px-6 !pt-4 pb-6 bg-white border border-solid transition-all rounded-md  hover:!border-green-600">
                  <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-medium w-[66px] h-[66px] -right-[33px] -top-[33px] z-[90]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                  <span className="flex flex-wrap gap-2 left-0">
                    <span className="bg-yellow-100 py-1 px-2.5 rounded-sm text-[14px] font-normal text-yellow-500">Temporary</span>
                  </span>
                  {/* main image section */}
                  <div className="text-center !pt-5 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={pic1} alt="pic1" />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Vehicale Technition</h3>
                    <div className="flex gap-2 justify-center items-center text-gray-400 text-[14px] capitalize font-normal">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={map_pin1} alt="" />
                        </span>
                      </div>
                      Province of Cuneo, Italy
                    </div>
                  </div>
                  {/* end text of section */}
                  <div className="px-2">
                    <ul className="mb-4">
                      <li className="mb-2">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={dollar_sign3} alt="dollar" />
                            </span>
                          </div>
                          <p>15k - 35k Taka</p>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={clock1} alt="clock1" />
                            </span>
                          </div>
                          <p>2 years ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Apply Button */}
                  <div>
                    <a className="block text-center text-[16px] leading-4 text-gray-600 py-3 px-6 bg-slate-200 rounded-md group-hover:text-white group-hover:bg-green-600 transition-all" href="#">Apply Here</a>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div>
                <div className="group overflow-hidden relative h-full border-green-600 grid content-between px-6 !pt-4 pb-6 bg-white border border-solid transition-all rounded-md  hover:!border-green-600">
                  <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-medium w-[66px] h-[66px] -right-[33px] -top-[33px] z-[90]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                  <span className="flex flex-wrap gap-2 left-0">
                    <span className="bg-green-100 py-1 px-2.5 rounded-sm text-[14px] font-normal text-green-500">Contact base</span>
                  </span>
                  {/* main image section */}
                  <div className="text-center !pt-5 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={pic1} alt="pic1" />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Vehicale Technition</h3>
                    <div className="flex gap-2 justify-center items-center text-gray-400 text-[14px] capitalize font-normal">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={map_pin1} alt="" />
                        </span>
                      </div>
                      Province of Cuneo, Italy
                    </div>
                  </div>
                  {/* end text of section */}
                  <div className="px-2">
                    <ul className="mb-4">
                      <li className="mb-2">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={dollar_sign3} alt="dollar" />
                            </span>
                          </div>
                          <p>15k - 35k Taka</p>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={clock1} alt="clock1" />
                            </span>
                          </div>
                          <p>2 years ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Apply Button */}
                  <div>
                    <a className="block text-center text-[16px] leading-4 text-gray-600 py-3 px-6 bg-slate-200 rounded-md group-hover:text-white group-hover:bg-green-600 transition-all" href="#">Apply Here</a>
                  </div>
                </div>
              </div>
              {/* 7 */}
              <div>
                <div className="group overflow-hidden relative h-full border-green-600 grid content-between px-6 !pt-4 pb-6 bg-white border border-solid transition-all rounded-md  hover:!border-green-600">
                  <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-medium w-[66px] h-[66px] -right-[33px] -top-[33px] z-[90]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                  <span className="flex flex-wrap gap-2 left-0">
                    <span className="bg-purple-100 py-1 px-2.5 rounded-sm text-[14px] font-normal text-purple-500">Part time</span>
                  </span>
                  {/* main image section */}
                  <div className="text-center !pt-5 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={pic1} alt="pic1" />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Vehicale Technition</h3>
                    <div className="flex gap-2 justify-center items-center text-gray-400 text-[14px] capitalize font-normal">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={map_pin1} alt="" />
                        </span>
                      </div>
                      Province of Cuneo, Italy
                    </div>
                  </div>
                  {/* end text of section */}
                  <div className="px-2">
                    <ul className="mb-4">
                      <li className="mb-2">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={dollar_sign3} alt="dollar" />
                            </span>
                          </div>
                          <p>15k - 35k Taka</p>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={clock1} alt="clock1" />
                            </span>
                          </div>
                          <p>2 years ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Apply Button */}
                  <div>
                    <a className="block text-center text-[16px] leading-4 text-gray-600 py-3 px-6 bg-slate-200 rounded-md group-hover:text-white group-hover:bg-green-600 transition-all" href="#">Apply Here</a>
                  </div>
                </div>
              </div>
              {/* 8 */}
              <div>
                <div className="group overflow-hidden relative h-full border-green-600 grid content-between px-6 !pt-4 pb-6 bg-white border border-solid transition-all rounded-md  hover:!border-green-600">
                  <div className="bg-green-600 p-1 absolute transform -rotate-[135deg] m-0 flex justify-center text-white font-medium w-[66px] h-[66px] -right-[33px] -top-[33px] z-[90]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white text-xxs -rotate-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                  <span className="flex flex-wrap gap-2 left-0">
                    <span className="bg-cyan-100 py-1 px-2.5 rounded-sm text-[14px] font-normal text-cyan-500">Remote</span>
                  </span>
                  {/* main image section */}
                  <div className="text-center !pt-5 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={pic1} alt="pic1" />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-normal capitalize text-black leading-5 mb-2">Vehicale Technition</h3>
                    <div className="flex gap-2 justify-center items-center text-gray-400 text-[14px] capitalize font-normal">
                      <div className="mb-[-7px]">
                        <span className="border-box inline-block w-[100%] overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                          <img src={map_pin1} alt="" />
                        </span>
                      </div>
                      Province of Cuneo, Italy
                    </div>
                  </div>
                  {/* end text of section */}
                  <div className="px-2">
                    <ul className="mb-4">
                      <li className="mb-2">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={dollar_sign3} alt="dollar" />
                            </span>
                          </div>
                          <p>15k - 35k Taka</p>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="flex gap-3 items-center text-gray-600 text-[14px] font-normel">
                          <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                              <img src={clock1} alt="clock1" />
                            </span>
                          </div>
                          <p>2 years ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Apply Button */}
                  <div>
                    <a className="block text-center text-[16px] leading-4 text-gray-600 py-3 px-6 bg-slate-200 rounded-md group-hover:text-white group-hover:bg-green-600 transition-all" href="#">Apply Here</a>
                  </div>
                </div>
              </div>

            </div>
            {/* Browse Button */}
            <div className="text-center mt-14">
              <a className="text-white bg-gray-600 px-6 py-2.5 rounded-md text-[16px] font-normal transition-all hover:bg-green-600" href="#">Browse All job</a>
            </div>
          </div>
        </section>
        {/* 4th section */}
        <section></section>
        {/* 5th section */}
        <section className="py-16 md:py-20 lg:py-24 font-sans ">
          <div className="px-4 py-2 xl:max-w-[1380px] mx-auto">
            {/* start text of section */}
            <div className="text-center mb-14">
              <p className="text-green-600 text-[16px] font-bold leading-none mb-1">Our Reviews</p>
              <h2 className="text-[32px] text-black font-bold">What Our Customer Saying</h2>
            </div>
            {/* main dev */}
            <div className="grid gap-4 xl:gap-6 lg:grid-cols-3 sm:grid-cols-2">
              <div className="single-blog group !p-5 border border-gray border-solid rounded-md hover:border-green-600 transition-all ">
                {/* image section */}
                <div className="img mb-4 overflow-hidden rounded-md">
                  <a href="#">
                    <div className="mb-[-7px]">
                      <span className="border-box inline-block border-0 m-0 p-0 max-w-[100%] relative opacity-1 bg-none">
                        <img src={blog_img1} className="transition-all duration-300 group-hover:scale-125" alt="blog_img1" />
                      </span>
                    </div>
                  </a>
                </div>
                {/* text dev*/}
                <p className="tezt-gray-600 text-[13px] font-normal mb-2">17 july 2022</p>
                <a className="text-black font-bold text-[20px] hover:text-green-600 transition-all duration-300 ease-in-out leading-6 mb-3 block" href="#">Simple & Awesome Blog Title Here Lorem Ipsum Dummy Text</a>
                <div className="mb-6">
                  <p className="text-[16px] text-gray-600 font-normal leading-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur quos quibusdam voluptatem aliquid consectetur explicabo illo accusamus? Laboriosam, cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, vero.
                  </p>
                </div>
                {/* Readmore button */}
                <div className="blog-btn">
                  <a className="inline-flex  gap-3 items-center py-2.5 px-6 bg-gray-200 rounded-md text-gray-600 group-hover:bg-green-600 group-hover:text-white leading-4 transition-all text-[18px]" href="#">
                    Read More
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="single-blog group !p-5 border border-gray border-solid rounded-md hover:border-green-600 transition-all ">
                {/* image section */}
                <div className="img mb-4 overflow-hidden rounded-md">
                  <a href="#">
                    <div className="mb-[-7px]">
                      <span className="border-box inline-block border-0 m-0 p-0 max-w-[100%] relative opacity-1 bg-none">
                        <img src={blog_img2} className="transition-all duration-300 group-hover:scale-125" alt="blog_img1" />
                      </span>
                    </div>
                  </a>
                </div>
                {/* text dev*/}
                <p className="tezt-gray-600 text-[13px] font-normal mb-2">17 july 2022</p>
                <a className="text-black font-bold text-[20px] hover:text-green-600 transition-all duration-300 ease-in-out leading-6 mb-3 block" href="#">Simple & Awesome Blog Title Here Lorem Ipsum Dummy Text</a>
                <div className="mb-6">
                  <p className="text-[16px] text-gray-600 font-normal leading-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur quos quibusdam voluptatem aliquid consectetur explicabo illo accusamus? Laboriosam, cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, vero.
                  </p>
                </div>
                {/* Readmore button */}
                <div className="blog-btn">
                  <a className="inline-flex  gap-3 items-center py-2.5 px-6 bg-gray-200 rounded-md text-gray-600 group-hover:bg-green-600 group-hover:text-white leading-4 transition-all text-[18px]" href="#">
                    Read More
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="single-blog group !p-5 border border-gray border-solid rounded-md hover:border-green-600 transition-all ">
                {/* image section */}
                <div className="img mb-4 overflow-hidden rounded-md">
                  <a href="#">
                    <div className="mb-[-7px]">
                      <span className="border-box inline-block border-0 m-0 p-0 max-w-[100%] relative opacity-1 bg-none">
                        <img src={blog_img3} className="transition-all duration-300 group-hover:scale-125" alt="blog_img1" />
                      </span>
                    </div>
                  </a>
                </div>
                {/* text dev*/}
                <p className="tezt-gray-600 text-[13px] font-normal mb-2">17 july 2022</p>
                <a className="text-black font-bold text-[20px] hover:text-green-600 transition-all duration-300 ease-in-out leading-6 mb-3 block" href="#">Simple & Awesome Blog Title Here Lorem Ipsum Dummy Text</a>
                <div className="mb-6">
                  <p className="text-[16px] text-gray-600 font-normal leading-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur quos quibusdam voluptatem aliquid consectetur explicabo illo accusamus? Laboriosam, cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, vero.
                  </p>
                </div>
                {/* Readmore button */}
                <div className="blog-btn">
                  <a className="inline-flex  gap-3 items-center py-2.5 px-6 bg-gray-200 rounded-md text-gray-600 group-hover:bg-green-600 group-hover:text-white leading-4 transition-all text-[18px]" href="#">
                    Read More
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Blog button */}
            <div className="text-center mt-14">
              <a className="text-white text-[16px] font-normal px-6 py-2.5 bg-gray-600 rounded-md hover:bg-green-600 transition-all " href="#">
                See All Blog
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
