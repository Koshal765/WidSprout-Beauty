import React from 'react'
import rose from '../assets/rose2.png';
import {motion} from 'framer-motion';
// import tilted from '../assets/tilterose.png';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect , useRef } from 'react';

// gsap.registerPlugin(ScrollTrigger);

const Landingpage = () => {

// const roseRef = useRef(null);

// useEffect(() => {

//   gsap.set(roseRef.current, { y: 0 });

//   gsap.fromTo(roseRef.current, 
//     {
//         y: 80,
//         opacity: 0,
//       },
//       {
//         y: -10,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out", // closest to easeOut
//         delay: 1,
//         scrollTrigger: {
//           trigger: roseRef.current,
//           start: "top 80%",
//           once: true,
//       }
//     });
// }, []);


  return (
    <section className='  w-full h-screen relative overflow-hidden pt-20 scroll-mt-24 ' id='Home'>
      <div className=' relative flex items-center justify-center overflow-visible h-full '>
      <div className="text-center relative z-0 -translate-y-11">
        
        <motion.h1  initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.9 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once:true  }} className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl  font-bold tracking-wider text-center  '>WILDSPROUT</motion.h1>
          

           
        
        <motion.h1 initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.9 }}
          transition={{ duration: 1, ease: 'easeOut' ,delay:1.5}}
          viewport={{once:true}}  className='text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold  tracking-widest  italic ' style={{ fontFamily: 'Dancing Script, cursive' }}>Beauty</motion.h1>

      
</div>

 
          {/* < motion.img   
            ref={roseRef}
          // initial={{ y:80, opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, ease: 'easeOut', delay:1.5 }}
          // viewport={{ once: true }} 
          
          
          src={rose} alt="Rose" className='w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80  object-contain  absolute ' /> */}

       <motion.div
        initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay:1 }}
          viewport={{ once: true }} 
      
       className="absolute bottom-24 left-6 sm:left-12 max-w-xs z-20">
          <p className="text-sm sm:text-base opacity-100 leading-relaxed">
            Nature-powered skincare crafted with purity, care, and elegance.
          </p>
        </motion.div>

    <motion.div 
     initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay:1 }}
          viewport={{ once: true }} 

    className="absolute bottom-10 sm:bottom-20 right-1/2 translate-x-1/2 sm:right-12 sm:translate-x-0 z-20   ">
      <button className="px-6  py-3 text-sm tracking-widest border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
      onClick={() => {
    const section = document.getElementById('Products')
    section?.scrollIntoView({ behavior: 'smooth' })
  }}
      >
        SHOP NOW
      </button>
    </motion.div> 
</div>
      
      

    </section>
  )
}

export default Landingpage