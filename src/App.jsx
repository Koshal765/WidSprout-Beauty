import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Feedback from './Feedback'
import Reviews from './Reviews'
import { useState } from 'react'
import About from './About'


function App() {

  const [refresh , setRefresh] = useState(0);
 
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Reviews refresh={refresh}/>
     <Feedback setRefresh={setRefresh}/>

    </>
  )
}

export default App
