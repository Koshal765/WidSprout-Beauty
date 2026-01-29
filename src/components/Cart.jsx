import React from 'react'
import { motion } from 'framer-motion';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";


const saveCart = (updatedCart) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
};


const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  setCartItems(cart);

  console.log('Cart items loaded:', cart);
}, []);


const increaseQuantity = (id) => {
  const updatedCart = cartItems.map(item => 
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
 setCartItems(updatedCart);
  saveCart(updatedCart);
}

const decreseQuantity = (id) => {
  const updatedCart = cartItems.map(item => 
    item.id === id 
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ).filter(item => item.quantity > 0);
 setCartItems(updatedCart);
  saveCart(updatedCart);
}


  return (
<>
<div className='w-full min-h-screen py-24 '>
  <div className=' flex items-center justify-around p-2'>
  <motion.h1
 
  
  className='text-3xl font-semibold text-center '>Your Cart </motion.h1>
  <button className='border px-3 py-2 rounded-full text-sm tracking-widest  border-black  hover:bg-black hover:text-white transition-all duration-300'><Link to="/all_products">Back to Shop</Link></button>
  </div>
   {cartItems.length === 0 ? (
  <motion.div 
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  viewport={{ once: true }}
  
  className='text-center'>
  <p className=' mt-25 text-gray-600 text-3xl'>Your cart is empty.</p>
 <Link to="/all_products"><button className='bg-amber-700 mt-10 py-2 px-4 text-xl font-semibold text-gray-200 rounded-full hover:bg-amber-800 transition-all hover:scale-105'>Shop now</button></Link>
 
  </motion.div>
  
) : (
  <div className='w-3/4 mx-auto mt-10 '>
    {cartItems.map((item) => (
      <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ amount: 0.3 }}
      
      key={item.id} className='flex items-center justify-around border py-4 border-amber-700 mb-5 rounded-3xl shadow-lg bg-rose-50'> 
        <div className='flex items-center gap-4'>
          <img src={item.image} alt={item.name} className='w-48 h-48 object-cover rounded-lg' />
          <div>
            <h2 className='font-semibold text-xl'>{item.name}</h2>
            <p>{item.description}</p>
            <div className='border-amber-700 rounded-2xl flex items-center justify-around  mt-3 border w-28 '>
                <button
        onClick={()=>{decreseQuantity(item.id)}}
        >
        <RiSubtractFill />
        </button>
            <p className='text-gray-900 text-xl'> {item.quantity}</p>
              <button
      onClick={() => increaseQuantity(item.id)}
    
    >
     <IoMdAdd />

    </button>
            </div>
          </div>
        </div>
        <p className='font-semibold text-xl'>Price: ₹{item.price * item.quantity}</p>
       
      </motion.div>
    ))}

<div className='flex justify-around items-center p-3 '>
  <button className='text-xl px-3 py-2 border rounded-3xl bg-amber-700 text-amber-100 transition-all hover:scale-110'>Order Now</button>
  <h2 className='text-2xl font-semibold text-right '>
    Total: ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
  </h2>

</div>

  </div>




)
}



</div>


</>
  )
}

export default Cart