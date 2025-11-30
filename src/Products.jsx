import React from 'react'
import { facepacks } from './constant';
import { motion } from 'framer-motion';


const Products = () => {
  return (
    <section className='py-25' id='Products' >
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-4xl font-serif font-semibold mb-10'>Our Products</h1>
        <p className='text-lg md:text-xl lg:text-xl w-75 md:w-100 lg:w-full mx-auto text-gray-600'>Explore our range of natural and eco-friendly beauty products designed to nourish your skin and enhance your natural glow.</p>

      </div>
      <div className="w-full flex flex-wrap justify-center gap-12 py-10">
        {facepacks.map((item, id) => (
          <motion.div
            key={id}
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
    </section>
  )
}

export default Products