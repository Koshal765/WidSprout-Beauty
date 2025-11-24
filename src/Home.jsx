import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Bannerr from './assets/Bannerr.png';

const Home = () => {
  return (
    <section id='Home' className="w-full">
      <div className='pt-24 max-w-[1100px] mx-auto px-6'>

        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-10'>

          {/* LEFT TEXT */}
          <div className='text-center md:text-left w-full md:w-1/2 md:mt-20'>

            <h1 className='text-xl md:text-3xl font-serif text-gray-700 mb-2'>
              Welcome to
            </h1>

            <h1 className='text-4xl font-serif font-semibold'>
              WildSprout Beauty
            </h1>

            <p className='mt-4 text-[13px] font-semibold text-gray-700 leading-relaxed'>
              Rooted in nature, Wild Sprout Cosmetics crafts eco-friendly, 
              chemical-free beauty products that let your skin breathe and bloom.
            </p>

            <ul className='mt-4 space-y-2 text-[20px] font-semibold text-gray-700'>
              <li>🌿 100% Natural Ingredients</li>
              <li>🌎 Eco-Friendly Packaging</li>
              <li>🐰 Cruelty-Free Products</li>
            </ul>

            <h2 className='mt-5 font-sans text-[14px]'>
              <Typewriter
                words={['Launching Soon...', 'Stay Tuned for Updates!', 'Exciting Products Ahead!']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          {/* RIGHT IMAGE / BANNER */}
          <div
            className="flex justify-center w-full md:w-1/2"
          >
            
            <div
              className="h-[470px] w-full max-w-[350px] bg-amber-200 bg-center bg-cover bg-no-repeat rounded-2xl border border-orange-300 shadow-md mt-5"
              style={{
                backgroundImage: `url(${Bannerr})`,
              }}
            ></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
