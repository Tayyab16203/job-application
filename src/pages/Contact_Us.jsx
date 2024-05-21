import back_pic from "/findjobPagePic/back_pic.jpeg"

const Contact_Us = () => {
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
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        {/* section 2 */}
        <section className="font-sans bg-gray-200">
            <div className="px-3 xl:max-w-[1380px] mx-auto py-10 md:py-20">
                {/* grid system */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full">
                    {/* left side  */}
                    <div className="w-full">
                        <h1 className="text-[2.25rem] font-semibold text-[#373737]">Reach Us Quickly</h1>
                        <p className="text-base text-gray-500 !pt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae donec risus eu elit. Non arcu laoreet lacus, enim lacinia eu mauris. Lorem nunc nec dictumst urna nulla sit. Non diam duis non, rhoncus morbi tortor sollicitudin sit duis. Arcu duis velit.
                        </p>
                        {/* form */}
                        <form>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 !pt-5">
                                <div>
                                    <input type="text" className="!p-3 w-full rounded border border-gray-100 shadow-md focus:outline-none bg-white" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="text" className="!p-3 w-full rounded border border-gray-100 shadow-md focus:outline-none bg-white" placeholder="Email" />
                                </div> 
                            </div>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 !pt-5 py-4">
                                <div>
                                    <input type="text" className="!p-3 w-full rounded border border-gray-100 shadow-md focus:outline-none bg-white" placeholder="Mobile No" />
                                </div>
                                <div>
                                    <input type="text" className="!p-3 w-full rounded border border-gray-100 shadow-md focus:outline-none bg-white" placeholder="Subject" />
                                </div> 
                            </div>
                            <textarea className="border border-theme-gray-100 focus:outline-none !shadow-md !p-3 h-40 w-full rounded" placeholder="Type your message"></textarea>
                            <button className="bg-green-600  flex gap-2 items-center !py-3 px-8 rounded-lg mt-4  border hover:bg-white hover:!border-green-600 hover:!text-green-600 text-white text-base  ease-in-out duration-500">
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* right side */}
                    <div className="w-full mt-16">
                        <div className="border-l-4 border-rose-400 px-5">
                            <p className="text-[24px] font-medium text-[#373737]">Address</p>
                            <p className="text-gray-400 text-base font-normal pt-2">
                                158 Ralegih Sit, Houston, 
                                <br />
                                Yk 5896,UK
                            </p>
                        </div>
                        <hr className="my-7 border-1 border-gray-600"/>
                        <div className="border-l-4 border-blue-400 px-5">
                            <p className="text-[24px] font-medium text-[#373737]">Phones</p>
                            <p className="text-gray-400 text-base font-normal pt-2">
                                (406) 555-0120 <span className="text-green-600">(Toll Free)</span>
                            </p>
                            <p className="text-gray-500 text-base font-normal pt-2">
                                (406) 555-0120
                            </p>
                        </div>
                        <hr className="my-7 border-1 border-gray-600"/>
                        <div className="border-l-4 border-orange-400 px-5">
                            <p className="text-[24px] font-medium text-[#373737]">E-Mail</p>
                            <p className="text-gray-400 text-base font-normal pt-2">
                                Support87@Gmial.Com
                            </p>
                            <p className="text-gray-500 text-base font-normal pt-2">
                                Info@Youremial.Com
                            </p>
                        </div>
                    </div>
                </div>
                {/* iframe of google map */}
                <div className="pt-10 w-full block">
                    <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12075.377291106915!2d-74.084481!3d40.831383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e3160910d4d5045!2sHoliday%20Inn%20Express%20%26%20Suites%20Meadowlands%20Area%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sbd!4v1648105833329!5m2!1sen!2sbd" frameBorder="0"></iframe>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Contact_Us
