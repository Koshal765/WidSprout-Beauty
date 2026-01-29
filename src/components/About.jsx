import React from 'react'
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section  className="w-full pt-35 scroll-mt-28  relative  h-[800px] overflow-hidden" >
        <div  className='  mt-20 max-w-[1100px] mx-auto px-6 ' id='About'>

  {/* <div
    id="about-bottle-anchor"
    className="absolute top-1/2 left-1/2"
  /> */}
          
        <motion.h1
        initial={{ y: 40, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
         viewport={{ amount: 0.3 }}
        
        className='text-center text-2xl md:text-2xl lg:text-6xl  font-extrabold' style={{fontFamily:'Dancing Script, cursive'}}>About Us</motion.h1>
    
    <div className='  h-100 flex justify-around items-center rounded-lg mt-6 p-6  '>
      <div className=' w-full md:w-3/4 lg:w-3/4 '>  
     
     <motion.div
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.9, ease: "easeOut" }}
viewport={{ amount: 0.3 }}
>
<p className="uppercase tracking-[0.25em] text-xs text-amber-700 mb-4">
About WildSprout
</p>


<h2 className="font-serif text-3xl md:text-4xl text-amber-900 leading-tight mb-6">
Nature‑Led Beauty,
<br />
Thoughtfully Crafted
</h2>


<p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md">
WildSprout Beauty blends pure botanicals with mindful formulation.
Every product is cruelty‑free, eco‑conscious, and designed to
enhance your skin’s natural balance — gently, effectively, and
beautifully.
</p>
</motion.div>
        </div>    

        <div className='bg-linear-to-b from-[#e8c9a0] to-[#fdf4e3] shadow-[0_40px_80px_rgba(0,0,0,0.15)] w-75 h-100 mt-10 ml-15 rounded-full'>
<div
    id="about-bottle-anchor"
    className="absolute top-1/2 left-1/2 "
  />

</div>
               </div>
                </div>

                
                
    </section>
  )
}

export default About