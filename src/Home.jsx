import React from 'react'
import homebanner from "./assets/homebanner.jpg"
import homebanner440 from "./assets/home banner_440.jpg"

const Home = () => {
  return (
    <div>
      <img className='hidden md:block' src={homebanner} alt="" />
      <img className='block sm:hidden' src={homebanner440} alt="" />
    </div>
  )
}

export default Home
