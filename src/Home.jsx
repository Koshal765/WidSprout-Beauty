import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import banner from './assets/banner.png'

const Home = () => {
  return (
    <section id='Home'>
    <div className='text-center pt-24'>
      <div
    className="flex  justify-center h-[200px] md:h-[410px] lg:h-[500px] w-full bg-center bg-contain bg-no-repeat rounded-2xl border border-gray-300 lg:border-none "
    style={{
      backgroundImage: `url(${banner})`,
    }}
  >
    <h1 className='flex items-end text-[8px] md:text-3xl lg:text-3xl font-serif text-gray-700 mb-5'>
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
    </section>
  )
}

export default Home