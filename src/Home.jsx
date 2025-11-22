import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className='text-center mt-40'>
        <div className='text-xl md:text-2xl lg:text-4xl'>
        <Typewriter
            words={['Welcome to WildSprout Beauty', 'Launching Soon...']}
            loop={0}    
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        /></div>
       
    </div>
  )
}

export default Home