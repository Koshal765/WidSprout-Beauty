import React from 'react'
import { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import logo1 from '../assets/logo1.png';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { id: 'Home', label: 'Home' },
    { id: 'About', label: 'About us' },
    { id: 'Products', label: 'Products' },
    { id: 'Reviews', label: 'Reviews' }
  ]



  const handlleMenuItemClick = (sectionid) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      // 🔹 Go to home first
      navigate("/", { state: { scrollTo: sectionid } });
    } else {
      // 🔹 Already on home → scroll
      const section = document.getElementById(sectionid);

      setTimeout(() => {
        section?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 200);
    }
  };

  const [count, setCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCount(totalCount);
  }

  useEffect(() => {
    updateCartCount();

    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);



  return (
    <nav>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}





        className='fixed top-0 left-0 bg-[#f3e3ca] p-3 flex items-center justify-between md:justify-around lg:justify-around shadow-xl  z-50 w-full ' >
        <Link to="/">     <div className='flex justify-center items-center '>
          <img src={logo1} className='w-8 h-8 sm:w-13 sm:h-12 md:w-13 md:h-12 lg:w-13 lg:h-12 ' />
          <h1 className='text-md font-semibold font-serif sm:text-xl md:text-2xl lg:text-3xl hidden md:block'>WildSprout</h1>


        </div> </Link>

        <div>
          <ul className=' hidden md:flex items-center'>
            {menu.map((items) => (
              <li key={items.id} className='inline-block font-semibold px-3 text-md  '>
                <button className='cursor-pointer transition-all hover:scale-110  hover:text-amber-900' onClick={() => handlleMenuItemClick(items.id)}>{items.label}</button></li>
            )

            )}
            <li className='text-md ml-4 cursor-pointer font-semibold transition-all hover:scale-110   hover:text-amber-900'><Link to="/contact" >Contact</Link></li>
          </ul>



          <div className='md:hidden flex items-start'>
            {isMenuOpen ? (<FiX className='text-xl cursor-pointer ' onClick={() => setIsMenuOpen(false)} />) : (<FiMenu className='text-3xl cursor-pointer ' onClick={() => setIsMenuOpen(true)} />)}
          </div>
          {isMenuOpen && (
            <ul className='absolute bg-white top-16 left-0 w-full text-center p-5 md:hidden border border-amber-700 shadow-lg shadow-rose-100 rounded-b-xl '>
              {menu.map((items) => (
                <li key={items.id} className='border-b-2 border-rose-200 w-full py-2 text-amber-700'>
                  <button className='cursor-pointer transition-all hover:scale-110' onClick={() => handlleMenuItemClick(items.id)}>{items.label}</button></li>
              )
              )}

              <li className='text-amber-700 cursor-pointer font-semibold transition-all hover:scale-110 mt-3'><Link to="/contact">Contact</Link></li>
             <Link to="/login"> <li className='text-amber-700 cursor-pointer font-semibold transition-all hover:scale-110 mt-3 flex justify-center items-center gap-1'>  <IoMdPerson /> Login</li></Link>   </ul>
          )}
        </div>

        <div className='flex justify-around w-10 md:w-20 gap-2 items-center'>
          <div className='relative'>
            <Link to="/cart"> <IoCartOutline size={25} className='transition-all hover:scale-110' /> </Link>
            {count > 0 && <span className='absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>{count}</span>}
          </div>
          <p className='hidden md:flex transition-all hover:scale-110 '> <Link to="/login"> <IoMdPerson size={23} /> </Link></p>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar