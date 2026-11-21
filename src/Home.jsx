import React from 'react'
import homebanner from "./assets/homebanner.jpg"
import homebanner440 from "./assets/homebanner_2.jpg"

const Home = () => {
  return (
    <div>
      <img className='hidden md:block' src={homebanner} alt="" />
      <img className='block sm:hidden w-full object-contain' src={homebanner440} alt="" />
    </div>
  )
}

export default Home
