import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
 
    const sectionId = 'Home';


    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div className='w-full bg-black py-10'>
        <div className='mt-5 flex justify-center gap-6 items-center flex-wrap lg:justify-around '>
        <h1 className='text-white font-serif font-semibold text-2xl lg:text-3xl cursor-pointer transition-all hover:scale-105 'onClick={(e)=>handleClick(e,sectionId)}>WildSprout Beauty</h1>
        <div className='flex justify-around w-25 lg:w-32'>
        <a href=''><FaFacebook size={24} s={true} className='text-white hover:text-blue-500'/></a>
        <a href='https://www.instagram.com/wildsprout_beauty?igsh=MXhienU0Z3lnd2h5cQ==' target='_blank'><FaInstagram size={24} s={true} className='text-white hover:text-rose-400 ' /></a>
        </div>
     <Link to="/contact" > <h2 className='text-white font-serif text-xl lg:text-xl'>Contact</h2></Link>

    </div>
    <p className='text-center text-gray-400 mt-10'>&copy; 2024 WildSprout Beauty. All rights reserved.</p>
    </div>
  )
}

export default Footer