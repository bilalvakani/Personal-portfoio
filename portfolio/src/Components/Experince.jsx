import React from 'react'
import EducationCard from '../Layout/EducationCard'

const Experince = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
    <h1 className="text-center font-semibold text-4xl  mb-8 lg:mb-7">
      Work History
    </h1>

    <div className=" bg-white p-5 rounded-md">
      <EducationCard title="Lead Web Designer" />
      <EducationCard title="Junior Web Designer" />
    </div>
  </div>

  )
}

export default Experince