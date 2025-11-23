import React from 'react'
import { useState } from 'react';
import { toast,ToastContainer,Slide } from 'react-toastify';
import axios from 'axios';

const Feedback = ({setRefresh}) => {
  const[isfilled,setIsfilled]=useState({
    name:"",
    rating:"",
    message:""
  });

  const[btndisabled,setBtndisabled]=useState(false);

  const reset = () => {
    setIsfilled({
      name:"",
      rating:"",
      message:""
    });
  }

  const handelSubmit = async(e) => {
   e.preventDefault();

   setBtndisabled(true);

   try{
      const res = await axios.post("https://6922dcec09df4a4923238a99.mockapi.io/Product_reviewa",isfilled);
  console.log(res.data);
    toast.success("Feedback submitted successfully!")
    reset();

  setRefresh(prev => prev + 1);
  setBtndisabled(false);

   }catch(error){
    toast.error("Error in submitting feedback. Please try again.",error)
   }
  
   const section = document.getElementById('Reviews');
    section.scrollIntoView({ behavior: 'smooth' });
    


  }

  const handelChange = (e) => {
    setIsfilled({...isfilled, [e.target.name]: e.target.value});
  } 

  return (
   <section id='Feedback' className='my-20 py-24'>
    <h1 className='text-center text-xl md:text-2xl lg:text-5xl font-serif font-semibold'>Share your Feedback </h1>
    <p className='text-center font-serif text-2xl mt-10 text-gray-700'>We value your experience! Your feedback helps us improve and serve you better.</p>
   <div className=' justify-center flex mt-19'>
    <form onSubmit={handelSubmit}> 
       <div className='text-center  w-75  md:w-120 lg:w-120 rounded-xl shadow-lg shadow-gray-400 border border-amber-100'>
      <h1 className='text-center mt-5 font-serif text-lg md:text-2xl lg:text-3xl'>Feedback Form</h1>
     
    
        <input type="text" name="name" placeholder='Enter your name' value={isfilled.name} onChange={handelChange} className='m-5 p-2 rounded-lg w-50 md:w-96 border border-orange-300' required/>
       
        <input type="text" name="rating" placeholder='Rate us out of 5' value={isfilled.rating} onChange={handelChange} className='m-5 p-2 rounded-lg w-50 md:w-96 border border-orange-300' required/>
        
        <textarea name="message" placeholder='Enter your feedback ' value={isfilled.message} onChange={handelChange} className='m-5 p-2 rounded-lg w-50 md:w-96 h-32 border border-orange-300' rows={2} required/>
      <br/>
        <button type="submit" disabled={btndisabled} className='mb-5 p-2 bg-yellow-400 rounded-xl hover:bg-yellow-500 transition-all hover:scale-105 w-50 md:w-100 lg:w-100'>{btndisabled ? "Submitting..." : "Submit"}</button>
      </div>
    </form>
     <ToastContainer autoClose={2000} theme='dark' transition={Slide} closeOnClick:true   draggable:true hideProgressBar={false}/>
   </div>
   </section>
  )
}

export default Feedback