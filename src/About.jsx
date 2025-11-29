import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='About' className="w-full py-28 ">
        <div 
       
        className='pt-4 max-w-[1100px] mx-auto px-6 '>
        <h1 className='text-center text-2xl md:text-2xl lg:text-4xl font-serif '>About WildSprout Beauty</h1>
        <motion.p 
         initial={{ y: 50, opacity: 0 }}
       
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
         viewport={{ amount: 0.3 }}

        className='mt-10 text-center font-serif text-md md:text-xl lg:text-xl text-gray-700'>At WildSprout Beauty, we believe in the power of nature to enhance your natural beauty. Our mission is to provide high-quality, eco-friendly, and cruelty-free beauty products that nourish your skin while respecting the environment. We are committed to using only the finest natural ingredients, sourced sustainably to ensure that our products are as kind to the planet as they are to your skin. Join us on our journey to embrace natural beauty and make a positive impact on the world, one product at a time.</motion.p> 
            
                </div>

                <div className='mt-30'>
                  <motion.h1 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  viewport={{ amount: 1.0 }}

                  className='text-amber-700 font-semibold font-serif  text-2xl md:text-3xl lg:text-3xl text-center'>Our Inspiration</motion.h1>
                  <div className='pt-4 max-w-[1100px] mx-auto px-6'>
                    <motion.p 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    viewport={{ amount: 0.3 }}

                    className='mt-10 text-center font-serif text-md md:text-xl lg:text-xl text-gray-700 '>We realized that many people struggle with acne and skin damage caused by chemical-based beauty products. That’s when we rediscovered ancient Asian beauty rituals — skincare created purely from nature. For thousands of years, Chinese, Indian and Korean cultures used flowers, pulses, oils, beeswax and herbs for glowing, healthy skin.

Inspired by these timeless methods, WildSprout brings back safe, organic and gentle skincare — without harsh chemicals or long-term side effects.</motion.p>
                  </div>
                  <div className=' lg:bg-amber-600 mt-20 flex flex-col justify-center rounded-lg shadow-lg shadow-gray-400'>
                    <motion.ul 
                  
                    
                    className='lg:flex justify-start lg:justify-center '>
                      <li className=' text-amber-500 lg:text-white text-center p-3 font-serif font-semibold text-lg md:text-xl lg:text-xl'>🌿 100% Natural Ingredients</li>
                      {/* <li className='text-white text-center p-3 font-serif font-semibold text-lg md:text-xl lg:text-xl'>🌎 Eco-Friendly Packaging</li> */}
                      <li className='text-amber-500 lg:text-white text-center p-3 font-serif font-semibold text-lg md:text-xl lg:text-xl'>🐰 Cruelty-Free Products</li>
                      <li className='text-amber-500 lg:text-white text-center p-3 font-serif font-semibold text-lg md:text-xl lg:text-xl'>💧 Hydrating & Nourishing</li>
                      <li className='text-amber-500 lg:text-white text-center p-3 font-serif font-semibold text-lg md:text-xl lg:text-xl'>🌸 Inspired by Ancient Rituals</li>
                    </motion.ul>
                  </div>
                </div>
    </section>
  )
}

export default About