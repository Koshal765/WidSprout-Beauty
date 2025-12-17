import React from 'react'
import { products } from './constant';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";


const Products = () => {

const [selectedProduct, setSelectedProduct] = useState(null);

const Openproduct=(item)=>{
  setSelectedProduct(item);
}
const Closeproduct=()=>{
  setSelectedProduct(null);
}


  return (
    <section className='py-25' id='Products' >
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-4xl font-serif font-semibold mb-10'>Our Products</h1>
        <p className='text-lg md:text-xl lg:text-xl w-75 md:w-100 lg:w-full mx-auto text-gray-600'>Explore our range of natural and eco-friendly beauty products designed to nourish your skin and enhance your natural glow.</p>

      </div>
      <div className="w-full flex flex-wrap justify-center gap-12 py-10">
        {products.map((item, id) => (
          <motion.div
            key={item.id} onClick={()=>Openproduct(item)}
              
            className="w-72 border border-amber-700 rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-rose-50 mt-5"
          >
            <div className="h-48 w-full rounded-xl overflow-hidden mb-4 border border-amber-200">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
            </div>
            <h1 className="text-lg font-serif font-semibold text-gray-900 mb-1">{item.name}</h1>
            <p className="text-amber-700 font-semibold mb-1">{item.tags}</p>
            <p className="text-sm text-gray-700 mb-3">{item.description}</p>
            <p className="text-gray-700 font-semibold mb-1 flex items-center" >Price : <span><MdCurrencyRupee /></span>{item.price}</p>
            <div className=' grid grid-cols-2 w-full p-4 rounded-lg items-center gap-6 ' onClick={(e)=>{
              e.stopPropagation();
            }}>
              <p className=' bg-amber-700 text-white text-center p-1 rounded-lg shadow-lg transition-all hover:scale-105'>Buy Now</p>
              <p className=' text-center text-amber-700 bg-amber-100 border border-amber-700 p-1 rounded-lg shadow-lg transition-all hover:scale-105'><IoCartOutline size={23} className='ml-8'/></p>
            </div>
          </motion.div>
        ))}
      </div>

{selectedProduct &&(
  <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 shadow-lg relative">
      <button onClick={Closeproduct} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold">&times;</button>
      <div className='flex gap-6 justify-center flex-col md:flex-row lg:flex-row'>
      <div className="h-50 w-full md:h-100 md:w-full lg:h-100 lg:w-full rounded-xl overflow-hidden mb-2 border border-amber-700 ">
        <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover object-center" />   
      </div>
      <div>
      <h2 className="text-xl lg:text-2xl font-serif font-semibold text-gray-900 mb-2">{selectedProduct.name}</h2>
      <p className="text-amber-700 font-semibold mb-2">{selectedProduct.tags}</p>
      <p className="text-gray-700 mb-2">{selectedProduct.description}</p>
      <p className='text-amber-700 font-semibold'>Ingredients :</p>
      <div className='flex flex-wrap gap-2 py-3'>
      {selectedProduct.ingredients.map((ingredient, index) => (
        <span key={index} className='bg-amber-800 text-xs font-semibold text-white rounded-full px-2 py-1 transition-all hover:scale-105 '>{ingredient}</span>
      ))}
      </div>
      <div className='sm:flex justify-around lg:block '>
     <p className=" font-semibold mb-1 flex items-center" > Price : <span><MdCurrencyRupee /></span>{selectedProduct.price}</p>
     <p className=' font-semibold'>{selectedProduct.rating}⭐ rating</p>
     </div>
            <div className=' grid grid-cols-2 w-full p-4 rounded-lg items-center gap-6 ' onClick={(e)=>stopPropagation()}>
              <p className=' bg-amber-700 text-white text-center p-1 rounded-lg shadow-lg transition-all hover:scale-105'>Buy Now</p>
              <p className=' text-center text-amber-700 bg-amber-100 border border-amber-700 p-1 rounded-lg shadow-lg transition-all hover:scale-105'><IoCartOutline size={23} className='ml-10'/></p>
            </div> 
      </div>
      </div>
    </div>
  </div>

)}


      <motion.div className='text-center mb-10 mt-10 '
       initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ amount: 0.3 }}>
     <Link to="/all_products"><button className='text-white font-semibold py-2 px-6 rounded-lg border bg-black transition-all hover:scale-105'  >View More</button></Link>
      </motion.div>
    </section>
  )
}

export default Products