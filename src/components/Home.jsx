import React from 'react'
import Landingpage from './Landingpage.jsx'
import About from './About.jsx'
import About2 from './About2.jsx'
import Products from './Products.jsx'
import Reviews from './Reviews.jsx'
import Feedback from './Feedback.jsx'
import Footer from './Footer.jsx'
import rose2 from '../assets/rose2.png';
import toner1 from '../assets/toner1.png';
import toner2 from '../assets/toner2.png';

import { useLocation } from 'react-router-dom';
import { useEffect , useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AdminPanel from './AdminPanel.jsx'


gsap.registerPlugin(ScrollTrigger);



const Home = ({refresh,setRefresh}) => {

const roseRef = useRef(null);
const toner1Ref = useRef(null);
const toner2Ref = useRef(null);

useEffect(() => {

   gsap.set(toner1Ref.current, {
    xPercent: -40,
    yPercent: -32,
    rotation: 20,
    // rotateY: -30,
    // rotateX: 10,
    scale: 1.8,
  });


  gsap.fromTo(
      toner1Ref.current,
      { y: 80, opacity: 0 },
      {
        y: -10,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 1,
      }
    );

      // Scroll animation → About
    gsap.to(toner1Ref.current, {
      x: "24vw",
      y: "20vh",
      scale: 1.7,
   rotation:-0.1,
      ease: "none",
      scrollTrigger: {
        trigger: "#About",
        start: "top bottom",
        end: "center center",
        scrub: true,
        pin: false,
      },
    });

ScrollTrigger.create({
  trigger: "#About",
  start: "center center",

  onEnter: () => {
    const anchor = document.getElementById("about-bottle-anchor");
    const rect = anchor.getBoundingClientRect();

    

    gsap.set(toner1Ref.current, {
      position: "absolute",
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      xPercent: -50,
      yPercent: -60,
    });
  },

  onLeaveBack: () => {
    // 🔁 restore Landing state
    gsap.set(toner1Ref.current, {
      position: "fixed",
      top: "28%",
      left: "50%",
      xPercent: -40,
      yPercent: -8,
      scale: 1.8,
      rotation: 20,
    });
  },
});

  }, []);




const location = useLocation();



  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const id = location.state.scrollTo;

    const timer = setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" ,
      block: "start"
       });
    }, 2500); // wait for Framer Motion

    return () => clearTimeout(timer);
  }, [location]);



  return (
  

<div className="relative overflow-x-hidden">
      {/* Floating bottle */}
      <img
  ref={toner1Ref}
  src={toner1}
  className="fixed top-1/2 left-1/2  w-26 sm:w-36 md:w-46      lg:w-56 z-40 pointer-events-none"
  alt="Rose bottle"
/>


    <Landingpage/>
     <About />
     <About2 />
      <Products />
      <Reviews refresh={refresh} />
      {/* <Feedback setRefresh={setRefresh} /> */}
      
      <Footer />
    
</div>
  )
}

export default Home