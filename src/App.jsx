import React from 'react'
import './App.css'
import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar'
import Home from './components/Home'
import Landingpage from './components/Landingpage'
import About from './components/About'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

import Feedback from './components/Feedback'
import AllProducts from './components/AllProducts'
import Login from './components/Login'
import Cart from './components/Cart'
import Contact from './components/Contact'
import AdminPanel from './components/AdminPanel'
import UserPanel from './components/UserPanel'







function App() {

  const [refresh , setRefresh] = useState(0);
 
  return (
    <>
       <Navbar /> {/* ✅ Always visible */}

      <Routes>
        <Route
          path="/"
          element={<Home refresh={refresh} setRefresh={setRefresh} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all_products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/user" element={<UserPanel />} />
      </Routes>
    
 

    </>
  )
}

export default App
