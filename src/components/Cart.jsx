// import React from 'react'
// import { motion } from 'framer-motion';
// import { useState , useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { RiSubtractFill } from "react-icons/ri";
// import { IoMdAdd } from "react-icons/io";


// const saveCart = (updatedCart) => {
//   localStorage.setItem("cart", JSON.stringify(updatedCart));
//   window.dispatchEvent(new Event("cartUpdated"));
// };


// const Cart = () => {

//   const [cartItems, setCartItems] = useState([]);

// useEffect(() => {
//   const cart = JSON.parse(localStorage.getItem('cart')) || [];
//   setCartItems(cart);

//   console.log('Cart items loaded:', cart);
// }, []);


// const increaseQuantity = (id) => {
//   const updatedCart = cartItems.map(item => 
//     item.id === id
//       ? { ...item, quantity: item.quantity + 1 }
//       : item
//   );
//  setCartItems(updatedCart);
//   saveCart(updatedCart);
// }

// const decreseQuantity = (id) => {
//   const updatedCart = cartItems.map(item => 
//     item.id === id 
//       ? { ...item, quantity: item.quantity - 1 }
//       : item
//   ).filter(item => item.quantity > 0);
//  setCartItems(updatedCart);
//   saveCart(updatedCart);
// }


//   return (
// <>
// <div className='w-full min-h-screen py-24 '>
//   <div className=' flex items-center justify-around p-2'>
//   <motion.h1
 
  
//   className='text-3xl font-semibold text-center '>Your Cart </motion.h1>
//   <button className='border px-3 py-2 rounded-full text-sm tracking-widest  border-black  hover:bg-black hover:text-white transition-all duration-300'><Link to="/all_products">Back to Shop</Link></button>
//   </div>
//    {cartItems.length === 0 ? (
//   <motion.div 
//   initial={{ y: 50, opacity: 0 }}
//   whileInView={{ y: 0, opacity: 1 }}
//   transition={{ duration: 1, ease: 'easeOut' }}
//   viewport={{ once: true }}
  
//   className='text-center'>
//   <p className=' mt-25 text-gray-600 text-3xl'>Your cart is empty.</p>
 
 
//   </motion.div>
  
// ) : (
//   <div className='w-3/4 mx-auto mt-10 '>
//     {cartItems.map((item) => (
//       <motion.div
//       initial={{ y: 60, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ duration: 1, ease: 'easeOut' }}
//       viewport={{ amount: 0.3 }}
      
//       key={item.id} className='flex items-center justify-around border py-4 border-amber-700 mb-5 rounded-3xl shadow-lg bg-rose-50'> 
//         <div className='flex items-center gap-4'>
//           <img src={item.image} alt={item.name} className='w-48 h-48 object-cover rounded-lg' />
//           <div>
//             <h2 className='font-semibold text-xl'>{item.name}</h2>
//             <p>{item.description}</p>
//             <div className='border-amber-700 rounded-2xl flex items-center justify-around  mt-3 border w-28 '>
//                 <button
//         onClick={()=>{decreseQuantity(item.id)}}
//         >
//         <RiSubtractFill />
//         </button>
//             <p className='text-gray-900 text-xl'> {item.quantity}</p>
//               <button
//       onClick={() => increaseQuantity(item.id)}
    
//     >
//      <IoMdAdd />

//     </button>
//             </div>
//           </div>
//         </div>
//         <p className='font-semibold text-xl'>Price: ₹{item.price * item.quantity}</p>
       
//       </motion.div>
//     ))}

// <div className='flex justify-between items-center p-3  border-t-amber-300 bg-amber-700 '>
//  <button className='border px-3 py-2 rounded-full text-sm tracking-widest  border-black  hover:bg-black hover:text-white transition-all duration-300'>Order Now</button>
//   <h2 className='text-2xl font-semibold text-right '>
//      ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
//   </h2>

// </div>

//   </div>

// )
// }

// </div>
// </>
//   )
// }

// export default Cart


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

/* ---------------- SAVE CART ---------------- */
const saveCart = (updatedCart) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  /* ---------------- LOAD CART ---------------- */
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  /* ---------------- QUANTITY HANDLERS ---------------- */
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const decreseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  return (
    <div className="w-full min-h-screen py-24">
      {/* ---------------- HEADER ---------------- */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold"
        >
          Your Cart
        </motion.h1>

        <button className="border px-4 py-2 rounded-full text-sm tracking-widest border-black hover:bg-black hover:text-white transition-all duration-300">
          <Link to="/all_products">Back to Shop</Link>
        </button>
      </div>

      {/* ---------------- EMPTY CART ---------------- */}
      {cartItems.length === 0 ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mt-32"
        >
          <p className="text-gray-600 text-3xl">
            Your cart is empty.
          </p>
        </motion.div>
      ) : (
        <>
          {/* ---------------- CART ITEMS ---------------- */}
          <div className="w-full max-w-5xl mx-auto mt-10 px-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.3 }}
                className="
                  flex items-center justify-between gap-6
                  border border-amber-700 bg-rose-50
                  py-6 px-6 mb-6 rounded-3xl shadow-lg

                  max-[700px]:
                  flex-col
                  items-start
                  bg-white
                "
              >
                {/* IMAGE + INFO */}
                <div className="flex items-center gap-6 w-full max-[700px]:flex-col max-[700px]:items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-48 h-48 object-cover rounded-xl
                      max-[700px]:w-full
                      max-[700px]:h-56
                    "
                  />

                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="font-semibold text-xl">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>

                    {/* QUANTITY CONTROLS */}
                    <div className="flex items-center justify-between border border-amber-700 rounded-2xl w-32 px-3 py-1 mt-3">
                      <button onClick={() => decreseQuantity(item.id)}>
                        <RiSubtractFill />
                      </button>

                      <p className="text-gray-900 text-lg">
                        {item.quantity}
                      </p>

                      <button onClick={() => increaseQuantity(item.id)}>
                        <IoMdAdd />
                      </button>
                    </div>
                  </div>
                </div>

                {/* PRICE */}
                <p className="font-semibold text-xl max-[700px]:self-end mt-4">
                  ₹{item.price * item.quantity}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ---------------- CHECKOUT BAR ---------------- */}
          <div
            className="
              w-full max-w-5xl mx-auto mt-8
              flex justify-between items-center
              p-4 text-white
              rounded-2xl
              max-[700px]:flex-col
              max-[700px]:gap-4
            "
          >
            <button className="border px-5 py-2 rounded-full text-sm text-black tracking-widest border-black hover:bg-black hover:text-white transition-all duration-300">
              Order Now
            </button>

            <h2 className="text-2xl font-semibold text-black">
              ₹
              {cartItems.reduce(
                (total, item) =>
                  total + item.price * item.quantity,
                0
              )}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
