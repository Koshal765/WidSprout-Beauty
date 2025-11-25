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
    </section>
  )
}

export default About