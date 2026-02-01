import React from 'react'
import { products } from '../constant';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { ToastContainer,toast,Bounce } from 'react-toastify';


const Products = () => {

const [selectedProduct, setSelectedProduct] = useState(null);

const Openproduct=(item)=>{
  setSelectedProduct(item);
}
const Closeproduct=()=>{
  setSelectedProduct(null);
}


const addToCart=(product)=>{
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  toast.success('Product added to cart!');

  window.dispatchEvent(new Event('cartUpdated'));
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
              <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center transition-transform duration-800 ease-out hover:scale-110  " />
            </div>
            <h1 className="text-lg font-serif font-semibold text-gray-900 mb-1">{item.name}</h1>
            <p className="text-amber-700 font-semibold mb-1">{item.tags}</p>
            <p className="text-sm text-gray-700 mb-3">{item.description}</p>
            <p className="text-gray-900 font-semibold mb-1 flex items-center" >Price : <span><MdCurrencyRupee /></span>{item.price}</p>
            <div className='  w-full p-4 rounded-lg items-center gap-6 ' onClick={(e)=>{
              e.stopPropagation();
            }}>
              {/* <p className=' bg-amber-700 text-white text-center p-1 rounded-lg shadow-lg transition-all hover:scale-105'>Buy Now</p> */}
              <button 
              onClick={()=>addToCart(item)}
              className='w-full text-center text-amber-100 bg-amber-700 border-2 border-amber-200  p-1 rounded-lg shadow-lg transition-all hover:scale-105 flex justify-center gap-1'>Add to Cart<IoCartOutline size={23}  /></button>
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
            <div className='w-full p-4 rounded-lg items-center gap-6 mt-5 ' >
              {/* <button className=' bg-amber-700 text-white text-center p-1 rounded-lg shadow-lg transition-all hover:scale-105'>Buy Now</button> */}
              <button 
              onClick={()=>addToCart(item)}
              className=' w-full flex gap-1 justify-center text-center text-amber-100 bg-amber-700 border-2 border-amber-200 p-1 rounded-lg shadow-lg transition-all hover:scale-105'>Add to Cart<IoCartOutline size={23}   /></button>
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
     <Link to="/all_products"><button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
     className='text-white font-semibold py-2 px-6 rounded-lg border bg-black transition-all hover:scale-105'  >View More</button></Link>
      </motion.div>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>



    </section>
  )
}

export default Products