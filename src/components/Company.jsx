import back_pic from "./assets/findjobPagePic/back_pic.jpeg"
import map_pin1 from "./assets/findjobPagePic/section2/map-pin1.svg"
import doller_sign3 from "./assets/findjobPagePic/section2/dollar-sign3.svg"
import user_pic from "./assets/companyPage/section2/users1.svg"
import avatar_pic from "./assets/findjobPagePic/section2/avatar.webp"
import customer1 from "./assets/findjobPagePic/section2/Customer1.webp"
import customer2 from "./assets/findjobPagePic/section2/customer2.webp"
import customer3  from "./assets/findjobPagePic/section2/customer3.png"
import customer4 from "./assets/findjobPagePic/section2/Customer4.webp"
import customer5 from "./assets/companyPage/section2/customer5.webp"
import customer6 from "./assets/companyPage/section2/customer6.webp"

const Company = () => {
  return (
    <>
    <main>
        {/* section 1 */}
        <section className="relative bg-cover bg-center bg-no-repeat font-sans" style={{backgroundImage: `url(${back_pic})`}}>
            <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,124,50,0.7)] z-2">
            </div>
            <div className="py-16 md:p-16 xl:max-w-[1380px] mx-auto">
                <div className="w-10/12 m-auto z-4 relative pt-10 pb-7">
                    <div className="text-center">
                        <h1 className="text-white text-[45px] xl:text-[64px] font-bold text-center leading-none mb-6 ">
                            All Companies
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        {/* section 2 */}
        <section className="pt-16 pb-20 !bg-gray-200">
            <div className="px-4 py-2 xl:max-w-[1380px] mx-auto">
                <div className="xl:grid gap-6 grid-cols-12">
                    {/* 1st side dev */}
                    <div className="col-span-3">
                        <div className="bg-white rounded-lg">
                            <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
                                <p className="text-black font-bold py-2 text-[16px] leading-4">Search Filter</p>
                            </div>
                            <div className="p-6">
                                <form>
                                    {/* input */}
                                    <div className="mb-4">
                                        <input type="text" className="bg-gray-200 rounded-md w-full py-3 px-6 leading-tight focus:outline-none" placeholder="Company Name" />
                                    </div>
                                    {/* 1st select */}
                                    <div className="jobCategorise pb-4">
                                        <select aria-label="Default select example" name="industry" className="border-0 focus:shadow-none py-3 bg-gray-200 text-[18px] text-gray-500 text-base font-normal focus-visible:white focus:outline-none svg_icon px-2 rounded-md w-full">
                                            <option value>Select Category</option>
                                            <option value="Bank 1">Bank 1</option>
                                            <option value="Commercial/Supply">Commercial/Supply</option>
                                            <option value="Construction/Facilities">Construction/Facilities</option>
                                            <option value="Design/Creative">Design/Creative</option>
                                            <option value="Education Training">Education Training</option>
                                            <option value="Engineer/Architects">Engineer/Architects</option>
                                            <option value="Hospitality/Travel">Hospitality/Travel</option>
                                            <option value="Electrician/Repair">Electrician/Repair</option>
                                            <option value="Marketing/Sales">Marketing/Sales</option>
                                            <option value="IT/Telecommunication">IT/Telecommunication</option>
                                            <option value="Accounting/Finance">Accounting/Finance</option>
                                            <option value="MERN">MERN</option>
                                        </select>
                                    </div>
                                    {/* 2nd select */}
                                    <div className="jobCategorise pb-4">
                                        <select aria-label="Default select example" name="Size" className="border-0 focus:shadow-none py-3 bg-gray-200 text-[18px] text-gray-500 text-base font-normal focus-visible:white focus:outline-none svg_icon px-2 rounded-md w-full">
                                            <option value>Company Size</option>
                                            <option value="1-10">1-10</option>
                                            <option value="10-50">10-50</option>
                                            <option value="50-100">50-100</option>
                                            <option value="100-500">100-500</option>
                                        </select>
                                    </div>
                                    {/* 3rd select */}
                                    <div className="jobCategorise pb-4">
                                        <select aria-label="Default select example" name="Salary" className="border-0 focus:shadow-none py-3 bg-gray-200 text-[18px] text-gray-500 text-base font-normal focus-visible:white focus:outline-none svg_icon px-2 rounded-md w-full">
                                            <option value>AVG. Salary</option>
                                            <option value="10K">10K</option>
                                            <option value="20K">20K</option>
                                            <option value="30K">30K</option>
                                            <option value="40K">40K</option>
                                            <option value="50K+">50K+</option>
                                        </select>
                                    </div>
                                    {/* 4th select */}
                                    <div className="jobCategorise pb-4">
                                        <select aria-label="Default select example" name="Revenue" className="border-0 focus:shadow-none py-3 bg-gray-200 text-[18px] text-gray-500 text-base font-normal focus-visible:white focus:outline-none svg_icon px-2 rounded-md w-full">
                                            <option value="">Revenue</option>
                                            <option value="0-5000">0-5000</option>
                                            <option value="5000-10">5000-10</option>
                                            <option value="10000-20">10000-20</option>
                                            <option value="20000-30">20000-30</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* 2nd side dev */}
                    <div className="col-span-9">
                        {/* top dev bar */}
                        <div className="bg-white rounded-md md:flex flex-wrap justify-between items-center mb-6 py-2.5 md:py-2">
                            <p className="text-[16px] text-black font-bold leading-4 px-6 mb-6 md:mb-0">
                                We have Found <span className="text-green-600">20</span> Company
                            </p>
                            <div className="text-center mr-2.5">
                                <a className="block w-auto bg-green-600 text-white px-6 py-2.5 text-[13px] font-medium rounded-md hover:bg-black transition-all outline-none" href="#">
                                    Add Your Company
                                </a>
                            </div>
                        </div>
                        {/* grid dev system */}
                        <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 justify-center">
                            {/* 1 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer4} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Ojjomedia</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">Get it done with love</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer2} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Ojjomedia</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">brand</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer3} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Employer Company</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">Get it done with love</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer3} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">JS Template</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">Get it done with love</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* 5 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer1} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Autolancer</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">Get it done with love</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* 6 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer5} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Autolancer</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">Get it done with love</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* 7 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer6} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Mern</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">Build your own mern</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* 8 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={avatar_pic} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Ojjomedia</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">Get it done with love</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* 9 */}
                            <div className="group overflow-hidden relative h-full grid content-between bg-white rounded-md px-6 !pt-4 pb-6 border border-gray border-solid transition-all hover:border-green-600">
                                {/* mid section */}
                                <div className="text-center !pt-5 pb-6">
                                    {/* img section */}
                                    <div className="flex justify-center mb-4">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={customer4} className="w-[100px] h-[100px]" alt="customer4 " />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Ojjomedia</h3>
                                    <p className="text-gray-500 text-[14px] font-normal mb-2 leading-6">Get it done with love</p>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="mb-6">
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={user_pic} alt="" />
                                                    </span>
                                                </div>
                                                1-10 Employee
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={doller_sign3} alt="" />
                                                    </span>
                                                </div>
                                                10,000-50,000
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="flex gap-3 items-center text-gray-500 text-xss1 font-normal">
                                                <div className="mb-[-7px]">
                                                    <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                        <img src={map_pin1} alt="" />
                                                    </span>
                                                </div>
                                                Dhaka
                                            </div>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd side dev end */}
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Company
