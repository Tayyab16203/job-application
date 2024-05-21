import back_pic from "/findjobPagePic/back_pic.jpeg"
import pic5 from "/candidatePage/section2/pic5.png"
import map_pin1 from "/candidatePage/section2/map-pin1.svg"

const Candidate = () => {
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
                            Candidate List
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
                                        <input type="text" className="bg-gray-200 rounded-md w-full py-3 px-6 leading-tight focus:outline-none" placeholder="Search by Service" />
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
                                            <option value>Select Skill</option>
                                            <option value="React Native">React Native</option>
                                            <option value="HTML">HTML</option>
                                            <option value="CSS">CSS</option>
                                            <option value="JavaScript">JavaScript</option>
                                            <option value="React Js">React Js</option>
                                            <option value="PHP">PHP</option>
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
                                We have Found <span className="text-green-600">6</span> Candidate
                            </p>
                            <div className="text-center mr-2.5">
                                <a className="block w-auto bg-green-600 text-white px-6 py-2.5 text-[13px] font-medium rounded-md hover:bg-black transition-all outline-none" href="#">
                                    Upload Your Resume
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
                                                <img src={pic5} className="w-[100%] h-[100%] rounded-full border border-solid border-gray group-hover:border-green-600" alt="pic5" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Nouman</h3>
                                    <div className="flex gap-2 items-center justify-center text-gray-500 text-[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} />
                                            </span>
                                        </div>
                                        UK
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="flex gap-2 justify-center items-center flex-wrap mb-4">
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Html</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">JavaScript</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">React Js</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Php</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Css</span>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">View Candidate</a>
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
                                                <img src={pic5} className="w-[100%] h-[100%] rounded-full border border-solid border-gray group-hover:border-green-600" alt="pic5" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Aslam</h3>
                                    <div className="flex gap-2 items-center justify-center text-gray-500 text-[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} />
                                            </span>
                                        </div>
                                        UK
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="flex gap-2 justify-center items-center flex-wrap mb-4">
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">React Js</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Php</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Css</span>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">View Candidate</a>
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
                                                <img src={pic5} className="w-[100%] h-[100%] rounded-full border border-solid border-gray group-hover:border-green-600" alt="pic5" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">hira</h3>
                                    <div className="flex gap-2 items-center justify-center text-gray-500 text-[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} />
                                            </span>
                                        </div>
                                        UK
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="flex gap-2 justify-center items-center flex-wrap mb-4">
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Html</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">JavaScript</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Css</span>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">View Candidate</a>
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
                                                <img src={pic5} className="w-[100%] h-[100%] rounded-full border border-solid border-gray group-hover:border-green-600" alt="pic5" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Nouman</h3>
                                    <div className="flex gap-2 items-center justify-center text-gray-500 text-[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} />
                                            </span>
                                        </div>
                                        UK
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="flex gap-2 justify-center items-center flex-wrap mb-4">
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">JavaScript</span>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">View Candidate</a>
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
                                                <img src={pic5} className="w-[100%] h-[100%] rounded-full border border-solid border-gray group-hover:border-green-600" alt="pic5" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Nouman</h3>
                                    <div className="flex gap-2 items-center justify-center text-gray-500 text-[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} />
                                            </span>
                                        </div>
                                        UK
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="flex gap-2 justify-center items-center flex-wrap mb-4">
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Html</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">JavaScript</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">React Js</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Php</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Css</span>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">View Candidate</a>
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
                                                <img src={pic5} className="w-[100%] h-[100%] rounded-full border border-solid border-gray group-hover:border-green-600" alt="pic5" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* title section */}
                                    <h3 className="text-[16px] font-normal text-black leading-6 mb-0">Nouman</h3>
                                    <div className="flex gap-2 items-center justify-center text-gray-500 text-[14px] font-normal">
                                        <div className="mb-[-7px]">
                                            <span className="border-box inline-block overflow-hidden opacity-1 bg-none border-0 p-0 m-0 relative max-w-[100%]">
                                                <img src={map_pin1} />
                                            </span>
                                        </div>
                                        UK
                                    </div>
                                </div>
                                {/* end section */}
                                <div className="px-2">
                                    {/* Employee and price section */}
                                    <ul className="flex gap-2 justify-center items-center flex-wrap mb-4">
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Php</span>
                                        </li>
                                        <li>
                                            <span className="text-gray-500 text-[12px] font-normal py-0.5 px-2 rounded-sm border border-solid border-gray">Css</span>
                                        </li>
                                    </ul>
                                    {/* apply button */}
                                    <div>
                                        <a className="block leading-4 text-gray-500 text-[16px] group-hover:text-white text-center py-3 px-6 bg-gray-200 rounded-md transition-all group-hover:!bg-green-600" href="#">View Candidate</a>
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

export default Candidate
