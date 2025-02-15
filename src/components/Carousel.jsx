

const Carousel = () => {
  return (
    <div>
            <div className="p-3 flex justify-end mb-2 ">
                <h1>Hot Categories</h1>
            </div>
            <div className=" overflow-x-auto carousel bg-[#2a323c] w-10/10 h-7/10 carousel-center  rounded-box space-x-4 p-4">
                
            <div className="carousel-item w-1/4">
                <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item w-1/4">
                <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item w-1/4">
                <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item w-1/4">
                <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item w-1/4">
                <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item w-1/4">
                <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item w-1/4">
                <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="rounded-box" />
            </div>
            </div>

    </div>
  )
}

export default Carousel