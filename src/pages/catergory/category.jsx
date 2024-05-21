
const Category = (props) => {
    const { categoryImage, categoryTitle } = props.data;

    return (
        <>
            <a className="group text-center p-6 bg-white rounded-lg cursor-pointer">
                <div className="mb-3 flex justify-center transition-all group-hover:scale-125">
                    <div className="mb-[-7px]">
                        <span className="border-box inline-block  bg-none opacity-1 border-0 m-0 p-0 relative max-w-[100%]">
                            <img className="w-[50px] h-[50px]" src={categoryImage} alt="img" />
                        </span>
                    </div>
                </div>
                <h4 className="text-[16px] text-black font-normal mb-2">{categoryTitle}</h4>
                <p className="text-gray-400 text-[13px] text-normal">0 Job</p>
            </a>
        </>
    )
}

export default Category
