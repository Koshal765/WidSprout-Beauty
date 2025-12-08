import React from 'react'
import { facepacks } from './constant';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';


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
        {facepacks.map((item, id) => (
          <motion.div
            key={id} onClick={()=>Openproduct(item)}
               initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ amount: 0.3 }}
            className="w-72 border border-amber-700 rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-rose-50 mt-5"
          >
            <div className="h-48 w-full rounded-xl overflow-hidden mb-4 border border-amber-200">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <h1 className="text-lg font-serif font-semibold text-gray-900 mb-1">{item.name}</h1>
            <p className="text-amber-700 font-semibold mb-1">{item.tags}</p>
            <p className="text-sm text-gray-700 mb-3">{item.description}</p>
            <div className='bg-amber-700 w-full py-2 rounded-lg '>
            <p className="text-md font-bold   text-white text-center ">{item.price}</p></div>
          </motion.div>
        ))}
      </div>

{selectedProduct &&(
  <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 shadow-lg relative">
      <button onClick={Closeproduct} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold">&times;</button>
      <div className='flex gap-6 justify-center flex-col md:flex-row lg:flex-row'>
      <div className="h-50 w-full md:h-100 md:w-full lg:h-100 lg:w-full rounded-xl overflow-hidden mb-4 border border-amber-700 ">
        <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" />   
      </div>
      <div>
      <h2 className="text-xl lg:text-2xl font-serif font-semibold text-gray-900 mb-2">{selectedProduct.name}</h2>
      <p className="text-amber-700 font-semibold mb-2">{selectedProduct.tags}</p>
      <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
      <p className='text-amber-700 font-semibold'>Ingredients :</p>
      <div className='flex flex-wrap gap-2 py-6'>
      {selectedProduct.ingredients.map((ingredient, index) => (
        <span key={index} className='bg-amber-800 text-xs font-semibold text-white rounded-full px-2 py-1 transition-all hover:scale-105 '>{ingredient}</span>
      ))}
      </div>
      <p className='mb-5 font-semibold'>{selectedProduct.rating}⭐ rating</p>
      <div className='bg-amber-700 w-full py-2 rounded-lg '>
        <p className="text-md font-bold   text-white text-center ">{selectedProduct.price}</p>
      </div>
      </div>
      </div>
    </div>
  </div>

)}


      <div className='text-center mb-10 '>
     <Link to="/all_products"><button className='text-white font-semibold py-2 px-6 rounded-lg border bg-black' >View More</button></Link>
      </div>
    </section>
  )
}

export default Products