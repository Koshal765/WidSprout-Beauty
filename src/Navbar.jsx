import React from 'react'
import { useState } from 'react'
import { FiX } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

    const[isMenuOpen,setIsMenuOpen]=useState(false);

    const menu=[
        {id:'Home',label:'Home'},
        {id:'About',label:'About us'},
        {id:'Contact',label:'Contact'},
        {id:'Reviews',label:'Reviews'},
        {id:'Feedback',label:'Feedback'}
    ]

   
   
   const handlleMenuItemClick = (sectionid) => {

    setIsMenuOpen(false);

    const section = document.getElementById(sectionid);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div>
        <nav className='bg-yellow-200 p-5 flex items-center justify-around shadow-xl fixed z-50 w-full ' >
           <div><h1 className='text-xl font-semibold font-serif sm:text-2xl md:text-3xl lg:text-4xl'>WildSprout Beauty</h1></div> 
           <div>
            <ul className=' hidden md:flex items-center'>
                {menu.map((items)=>(
                    <li  key={items.id} className='inline-block font-semibold px-3 text-sm  '>
                        <button className='cursor-pointer transition-all hover:scale-110' onClick={()=>handlleMenuItemClick(items.id)}>{items.label}</button></li>
                )

                )}
                <li className='text-sm cursor-pointer font-semibold transition-all hover:scale-110'><a href="#">Products</a></li>
            </ul>
            <div className='md:hidden'>
                {isMenuOpen ? (<FiX className='text-3xl cursor-pointer' onClick={()=>setIsMenuOpen(false)}/>):(<FiMenu className='text-3xl cursor-pointer' onClick={()=>setIsMenuOpen(true)}/>)}
            </div>
            {isMenuOpen && (
                <ul className='absolute bg-yellow-200 top-16 left-0 w-full text-center p-5 md:hidden'>
                {menu.map((items)=>(
                    <li  key={items.id} className='border-b-2 border-gray-300 w-full py-2'>
                        <button className='cursor-pointer transition-all hover:scale-110' onClick={()=>handlleMenuItemClick(items.id)}>{items.label}</button></li>
                )
                )}


                <li className='border-b-2 border-gray-300 w-full py-2 cursor-pointer 
             transition-all hover:scale-110'><a href="#">Products</a></li>
            </ul>
            )}
           </div>
        </nav>
    </div>
  )
}

export default Navbar