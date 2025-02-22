const Carousel = () => {
  return (
    <div>
      <div className="p-3 flex justify-end mb-2 ">
        <h1>Hot Categories</h1>
      </div>
      <div className=" overflow-x-auto flex bg-[#2a323c] w-10/10 h-7/10 carousel-center  rounded-box space-x-4 p-4">


        <div className="carousel-item w-1/4">
          <div className="card card-compact bg-base-100  shadow-xl">
            <figure className="h-45/100" >
              <img
                src="https://cdn.pixabay.com/photo/2020/02/24/04/26/web-design-4875188_640.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body h-55/100">
              <h2 className="card-title">Design Patterns!</h2>
              <p>Explore essential software design patterns.</p>
              <div className="card-actions justify-end">
              <button className="bg-[#3E5879] btn ">Explore</button>
              </div>
            </div>
          </div>
        </div>


        <div className="carousel-item w-1/4">
            <div className="card card-compact bg-base-100  shadow-xl">
            <figure className="h-45/100" >
                <img
                src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_640.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body h-55/100">
                <h2 className="card-title">Utility Snippets</h2>
                <p>Discover ready-to-use utility Snippets </p>
                <div className="card-actions justify-end">
                <button className="bg-[#3E5879] btn ">Explore</button>
                </div>
            </div>
            </div>
        </div>

  
        <div className="carousel-item w-1/4">
            <div className="card bg-base-100  shadow-xl">
            <figure className="h-45/100" >
                <img
                src="https://cdn.pixabay.com/photo/2017/03/30/14/49/web-design-2188728_640.png"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Machine Coding Round</h2>
                <p>Master real-world coding challenges.</p>
                <div className="card-actions justify-end">
                <button className="bg-[#3E5879] btn ">Explore</button>
                </div>
            </div>
            </div>
        </div>

  
        <div className="carousel-item w-1/4">
            <div className="card bg-base-100  shadow-xl">
            <figure className="h-45/100">
                <img
                src="https://cdn.pixabay.com/photo/2018/04/20/13/15/development-icon-3335977_640.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Ui Components</h2>
                <p>Find modern interfaces effortlessly.</p>
                <div className="card-actions justify-end">
                <button className="bg-[#3E5879] btn ">Explore</button>
                </div>
            </div>
            </div>
        </div>

  



      </div>
    </div>
  );
};

export default Carousel;
