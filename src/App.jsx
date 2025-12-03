import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Feedback from './Feedback'
import Reviews from './Reviews'
import { useState } from 'react'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Footer from './Footer'




function App() {

  const [refresh , setRefresh] = useState(0);
 
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Products/>
     <Reviews refresh={refresh}/>
     <Feedback setRefresh={setRefresh}/>
     {/* <Contact/> */}
     <Footer/>
 

    </>
  )
}

export default App
