import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react';

const Reviews = ({refresh}) => {
 const[reviews,setReviews]=useState([]);
 const [loading, setLoading] = useState(true);

   const fetchReviews = async () => {
        try {
            const response = await axios.get("https://6922dcec09df4a4923238a99.mockapi.io/Product_reviewa");
            setReviews(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }finally {
            setLoading(false);
        }
    };

 useEffect(() => {
    fetchReviews();
 }, [refresh]);


//   if (reviews.length === 0) {
//     return <div>No reviews available.</div>;
//   }





  return (
    <section id='Reviews' className='py-24'>
      <div className='text-center'>
        <h1 className=' text-3xl md:text-4xl lg:text-5xl font-serif mb-10'>⭐Customer Reviews</h1>
        <p className='text-lg w-75 md:w-100 lg:w-full mx-auto'>"Here’s what our customers have to say about their experience with us."</p>
        <p className='mt-5 font-semibold '>We value our customers, and their feedback helps us grow.</p>
      </div>
      <div className='flex justify-center flex-wrap gap-5 w-full'>
      {loading ? (<div><h1>loading Customers Reviews</h1></div> ) : (  reviews.length === 0 ? (<div className='w-full  flex justify-center'>
        <div className='w-75 h-auto border border-amber-300 rounded-lg p-5 m-5 shadow-lg shadow-gray-400'>
        <h1 className='text-center  '>No Reviews Available</h1>
        </div>
        </div>) : (
      <div className='w-full flex flex-wrap justify-center gap-5 mt-5'>
    
       {reviews.map((rev)=>(
        <div key={rev.id} className=' w-70 md:w-100 lg:w-100 h-auto border border-amber-300 rounded-lg p-5 m-5 shadow-lg shadow-gray-400 transition-all hover:scale-105 flex flex-col justify-between'>
            <div className='grow'>
            <p className='text-xl  md:text-2xl lg:text-2xl font-medium'>{rev.message}</p>
            <p className='text-xl md:text-2xl lg:text-2xl mt-3'>{rev.rating}⭐</p> 
          </div> 
            <h1 className='mt-2 font-semibold '>-{rev.name}</h1>
            
        </div>
       ))}</div>
       
     
      )
     )}
     </div>
    </section>
  )
}

export default Reviews