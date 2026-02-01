import React from 'react'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


const UserPanel = () => {
  const [activePage, setActivePage] = useState('Profile');
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isUserLoggedIn") === "true"
  );



  return (
     <div className="min-h-screen bg-neutral-50 w-full flex flex-col md:grid md:grid-cols-12 py-20">
  <motion.aside 
  initial={{ x: 0, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="bg-white shadow-lg p-6 
             md:col-span-2 flex md:flex-col flex-row 
             justify-around md:justify-start md:gap-4 
             mb-4 md:mb-0 border border-amber-200 rounded-r-2xl
             overflow-x-auto"
>
  <h1 className="hidden md:block text-xl font-bold mb-8 text-[#8B5E34]">
    WildSprout Beauty
  </h1>

  <nav className="flex md:flex-col flex-row justify-around md:justify-start w-full gap-4">
    {["Profile",  "Orders",  "Settings"].map(
      (page) => (
        <p
          key={page}
          onClick={() => setActivePage(page)}
          className={`cursor-pointer ${
            activePage === page
              ? "font-semibold text-neutral-900"
              : "text-neutral-500 hover:text-neutral-900"
          }`}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </p>
      )
    )}
  </nav>
</motion.aside>

   <main className="col-span-10 p-8">
        {activePage === "Profile" && <Profile />}
    
        {activePage === "Orders" && <Orders />}
       
        {activePage === "Settings" && <Settings />}
      </main>

    </div>
   
  );
}

const Profile = () => {
    return(
  <div>
    <h2 className="text-2xl font-semibold mb-6">Welcome User </h2>
    <p>Manage your profile information here.</p>
  </div>
)};

const Orders = () => {
    return(
  <div> 
    <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
    <p>View and manage your orders here.</p>
  </div>
)}

const Settings = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isUserLoggedIn");
    navigate('/login');
  }

    return(
  <div>
    <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
    <p>Update your account settings here.</p>
    <button
    onClick={handleLogout}
    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">Logout</button>
  </div>
)}
   

export default UserPanel