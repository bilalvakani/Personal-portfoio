import React from 'react'

const Portfolio = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4">
        Portfolio
      </h1>
      <div className=" flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        <div className=" w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img1}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img2}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img3}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img4}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img5}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img6}
            alt="img"
          />
        </div>
      </div>
    </div>

  )
}

export default Portfolio