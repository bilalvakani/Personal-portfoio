import React from 'react'
import img from '../assets/img.png'
import Button from '../Layout/Button'

const Home = () => {
  return (
<div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm Muhammad Bilal Vakani <br></br>
          <span className=" text-brightColor"> Front-end </span>
          Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          reprehenderit, quos praesentium iusto earum obcaecati nesciunt.
          Corporis quasi ratione
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel delectus ratione eveniet! Omnis sunt laborum, molestias veritatis rerum voluptate, officiis iste facere tenetur alias explicabo vero necessitatibus provident maxime doloribus.
        </p>
        <Button title="HIRE ME" />
      </div>
      <div className=" mt-20">
        
      {/* <img className='rounded-[1000px] mb-10 border-blue-400' width={570} src={img} alt="img" /> */}
      <img 
  className="rounded-[220px]   mb-32 " 
  width={300} 
  src={img} 
  alt="img" 
/>
      </div>
    </div>  )
}

export default Home