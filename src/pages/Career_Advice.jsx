import back_pic from "/findjobPagePic/back_pic.jpeg"
import blog_img1 from "/homeSection5pic/blog-img-1.webp"
import blog_img2 from "/homeSection5pic/blog-img-2.webp"
import blog_img3 from "/homeSection5pic/blog-img-3.webp"

const Career_Advice = () => {
  return (
    <>
      <main>
        {/* section 1 */}
        <section className="relative bg-cover bg-center bg-no-repeat font-sans" style={{ backgroundImage: `url(${back_pic})` }}>
          <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,124,50,0.7)] z-2">
          </div>
          <div className="py-16 md:p-16 xl:max-w-[1380px] mx-auto">
            <div className="w-10/12 m-auto z-4 relative pt-10 pb-7">
              <div className="text-center">
                <h1 className="text-white text-[45px] xl:text-[64px] font-bold text-center leading-none mb-6 ">
                  Career Advice
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* 2nd section */}
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

export default Career_Advice
