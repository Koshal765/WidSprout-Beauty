import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import banner from './assets/banner.png'

const Home = () => {
  return (
    <div className='text-center mt-10'>
      <div
    className="flex  justify-center h-[200px] md:h-[410px] lg:h-[500px] w-full bg-center bg-contain bg-no-repeat rounded-lg  "
    style={{
      backgroundImage: `url(${banner})`,
    }}
  >
    <h1 className='flex items-end text-md md:font-3xl lg:font-2xl font-semibold text-gray-700 mb-10'>
        <Typewriter
            words={['Welcome to WildSprout Beauty', 'Launching Soon...']}
            loop={0}    
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        /></h1></div>
       
    </div>
  )
}

export default Home