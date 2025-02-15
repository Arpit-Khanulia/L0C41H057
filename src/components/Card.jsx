
const Card = ({height}) => {

    console.log(height)
  return (
    <>
        <div className={`carousel  rounded-box `+ height + ` m-4 w-8/10`} style={{border:'2px solid red'}}>
            <div className="carousel-item h-full">
                <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
            </div>
        </div>
    </>
  )
}

export default Card