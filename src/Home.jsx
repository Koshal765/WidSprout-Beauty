import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import banner from './assets/banner.png'
import Bannerr from './assets/Bannerr.png';

const Home = () => {
  return (
    <section id='Home'>
    <div className='text-center pt-24'>
      <div className='
       flex justify-around flex-wrap  w-100%'>
        <div className='text-start mt-10 '>
         <h1 className=' text-xl md:text-3xl lg:text-2xl font-serif text-gray-700 mb-5 mt-15'>
     Welcome to  </h1>
     <h1 className='text-4xl  font-serif font-semibold'>WildSprout Beauty</h1>
     <p className='mt-3 w-100 text-[12px] font-semibold text-gray-700'>Rooted in nature, Wild Sprout Cosmetics crafts eco-friendly, chemical-free beauty products that let your skin breathe and bloom.</p>
    <ul>
      <li className='mt-5 font-semibold text-gray-700 text-[12px]'>🌿 100% Natural Ingredients</li>
      <li className='mt-2 font-semibold text-gray-700 text-[12px]'>🌎 Eco-Friendly Packaging</li>
      <li className='mt-2 font-semibold text-gray-700 text-[12px]'>🐰 Cruelty-Free Products</li>
    </ul>
    <h2 className='mt-5 font-sans'>
       <Typewriter
      words={['Launching Soon...', 'Stay Tuned for Updates!', 'Exciting Products Ahead!']}
      loop={0}
      cursor
      cursorStyle='|'
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      
    /></h2>
     </div>
      <div
    className="flex bg-amber-200 justify-center h-[450px] md:h-[410px] lg:h-[450px] w-80  md:w-85 lg:w-85 mt-5 bg-center bg-contain bg-no-repeat rounded-2xl border border-orange-300  shadow-lg shadow-gray-400"
    style={{
      backgroundImage: `url(${Bannerr})`,
    }}
  >
   </div>
       
    </div></div>
    </section>
  )
}

export default Home