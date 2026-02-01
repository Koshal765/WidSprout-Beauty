// import React from 'react'
// import axios from 'axios';
// import { useState,useEffect} from 'react';
// import { motion } from 'framer-motion';



// const Reviews = ({refresh}) => {
//  const[reviews,setReviews]=useState([]);
//  const [loading, setLoading] = useState(true);

//    const fetchReviews = async () => {
//         try {
//             const response = await axios.get("https://6922dcec09df4a4923238a99.mockapi.io/Product_reviewa");
//             setReviews(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.error("Error fetching reviews:", error);
//         }finally {
//             setLoading(false);
//         }
//     };

//  useEffect(() => {
//     fetchReviews();
//  }, [refresh]);


// //   if (reviews.length === 0) {
// //     return <div>No reviews available.</div>;
// //   }





//   return (
//     <section id='Reviews' className='py-24' >
//       <div className='text-center'>
//         <h1 className=' text-2xl md:text-4xl lg:text-4xl font-serif mb-10'>⭐Customer Reviews</h1>
//         <p className='text-lg w-75 md:w-100 lg:w-full mx-auto'>"Here’s what our customers have to say about their experience with us."</p>
//         <p className='mt-5 font-semibold '>We value our customers, and their feedback helps us grow.</p>
//       </div>
//       <div className='flex justify-center flex-wrap gap-5 w-full'>
//       {loading ? (<div><h1>loading Customers Reviews</h1></div> ) : (  reviews.length === 0 ? (<div className='w-full  flex justify-center'>
//         <div className='w-75 h-auto border border-rose-500 rounded-lg p-5 m-5 shadow-lg shadow-gray-400'>
//         <h1 className='text-center  '>No Reviews Available</h1>
//         </div>
//         </div>) : (
//       <motion.div
          
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.5, ease: 'easeOut' }}
//           viewport={{ amount: 0.3 }}
      
//       className='w-full flex flex-wrap justify-center gap-5 mt-5'>
    
//        {reviews.map((rev)=>(
//         <div key={rev.id} className='w-70 md:w-100 lg:w-100 h-auto border border-amber-300 rounded-lg p-5 m-5 shadow-lg shadow-rose-200 transition-all hover:scale-105 flex flex-col justify-between'>
//             <div className='grow'>
//             <p className='text-md  md:text-lg lg:text-lg font-medium text-gray-600'>{rev.message}</p>
//             <p className='text-xl md:text-2xl lg:text-2xl mt-3'>{rev.rating}⭐</p> 
//           </div> 
//             <h1 className='mt-2 font-semibold text-amber-800 '>-{rev.name}</h1>
            
//         </div>
//        ))}</motion.div>
       
     
//       )
//      )}
//      </div>
//     </section>
//   )
// }

// export default Reviews


import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = ({ refresh }) => {
  const sectionRef = useRef(null);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasReached, setHasReached] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const chunkSize = 2;

  // 🔹 Fetch reviews from API
  const fetchReviews = async () => {
    try {
      const res = await axios.get(
        "https://6922dcec09df4a4923238a99.mockapi.io/Product_reviewa"
      );
      setReviews(res.data || []);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [refresh]);

  // 🔹 Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHasReached(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () =>
      sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // 🔹 Split reviews into slides
  const slides = useMemo(() => {
    const result = [];
    for (let i = 0; i < reviews.length; i += chunkSize) {
      result.push(reviews.slice(i, i + chunkSize));
    }
    return result;
  }, [reviews]);

  // 🔹 Auto-slide (desktop/tablet only)
  useEffect(() => {
    if (!hasReached || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, hasReached]);

  return (
    <section
      ref={sectionRef}
      id="Reviews"
      className="w-full bg-[#f7e7cc] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2F2A24]">
            Loved by Our Customers
          </h2>
          <p className="text-[#6B5E52] mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Real experiences from people who trust WildSprout Beauty for clean,
            organic skincare.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-[#6B5E52] font-semibold">
            Loading customer reviews…
          </div>
        )}

        {/* Empty State */}
        {!loading && reviews.length === 0 && (
          <div className="flex justify-center">
            <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-md text-center text-[#6B5E52]">
              No reviews available yet 🌿
            </div>
          </div>
        )}

        {/* Reviews */}
        {!loading && reviews.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={hasReached ? { opacity: 0, y: 30 } : false}
              animate={hasReached ? { opacity: 1, y: 0 } : false}
              exit={hasReached ? { opacity: 0, y: -30 } : false}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
            >
              {slides[currentSlide]?.map((rev) => (
                <motion.div
                  key={rev.id}
                  whileHover={{ scale: 1.03 }}
                  className="
                    bg-white
                    rounded-2xl
                    shadow-md
                    hover:shadow-xl
                    transition
                    p-6
                    flex
                    flex-col
                    justify-between
                  "
                >
                  <p className="text-sm sm:text-base text-[#4B4036] leading-relaxed mb-4">
                    “{rev.message}”
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-amber-600 font-semibold">
                      {rev.rating} ★
                    </p>
                    <p className="text-sm font-medium text-[#8B5E34]">
                      — {rev.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Reviews;
