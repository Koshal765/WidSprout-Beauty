import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";

import { useNavigate } from "react-router-dom";
export default function AuthFlipPreview() {
  const [isLogin, setIsLogin] = useState(true);
  const [hidepass, setHidepass] = useState(true);
  const [role, setRole] = useState("user");
  const [user, setUser] = useState({
    username: "",
    password: "",
    cnfpass: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const changeForm = () => {
    setIsLogin(!isLogin);
    setUser({ username: "", password: "", cnfpass: "" });
  };

const Navigate = useNavigate();

  const handleAdminLogin = (e) => {
    // Implement admin login logic here
    e.preventDefault();
if(role === "admin" && user.username === "admin" && user.password === "adminpass"){
  // Successful admin login
  localStorage.setItem("isAdminLoggedIn", "true");
  Navigate('/admin');
} else {
  alert("Invalid admin credentials");
}

  };


  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");  
    if (isAdminLoggedIn === "true") {
      Navigate('/admin');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6efe4]">
      {/* perspective */}
      <div className="perspective-distant">
        <motion.div
        initial={{ y: 90 , opacity: 0 }}
          animate={{ rotateY: isLogin ? 0 : 180 ,opacity:1, y:40}}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="relative w-[300px] sm:w-[420px] h-[440px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* LOGIN */}
          <div className="absolute inset-0 backface-hidden">
            <div className="h-full rounded-2xl bg-[#fdf8f3] shadow-2xl border border-[#C68642]/30 p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#7a3a00]">
                Welcome Back 🌿
              </h2>
              <p className="text-center text-sm text-gray-600 mt-2">
                Login to continue your journey
              </p>

              {/* role */}
              <div className="flex justify-center gap-5 mt-6">
                <button
                  onClick={() => setRole("user")}
                  className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all ${
                    role === "user"
                      ? "bg-[#C68642] text-white scale-110"
                      : "bg-[#EADBC8] text-[#8B5E34]"
                  }`}
                >
                  <FiUser size={22} />
                </button>
                <button
                  onClick={() => setRole("admin")}
                  className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all ${
                    role === "admin"
                      ? "bg-[#8B5E34] text-white scale-110"
                      : "bg-[#EADBC8] text-[#8B5E34]"
                  }`}
                >
                  <LuShieldCheck size={22} />
                </button>
              </div>
          <form  onSubmit={handleAdminLogin}>
              <div className="mt-8">
                <input
                  name="username"
                  placeholder="Username or email"
                  value={user.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border focus:border-amber-600 outline-none"
                />
              </div>

              <div className="mt-4 flex items-center border rounded-full focus-within:border-amber-600">
                <input
                  name="password"
                  type={hidepass ? "password" : "text"}
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full outline-none"
                />
                <span
                  onClick={() => setHidepass(!hidepass)}
                  className="mr-3 text-amber-900 cursor-pointer"
                >
                  {hidepass ? <IoEyeOff /> : <IoEye />}
                </span>
              </div>

              <button 
            type="submit"
              className="mt-6 w-full py-3 rounded-full bg-linear-to-r from-[#e9bf8f] via-[#C68642] to-[#8B5E34] text-white hover:scale-105 transition">
                Login
              </button>
              </form>
              <p className="text-center text-sm mt-6">
                Create account?{" "}
                <button
                  onClick={changeForm}
                  className="text-amber-600 font-semibold"
                >
                  Sign Up
                </button>
              </p>    
                
            </div>
            
          </div>
   

          {/* SIGN UP */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden">
            <div className="h-full rounded-2xl bg-[#fdf8f3] shadow-2xl border border-[#C68642]/30 p-6">
              <h2 className="text-3xl font-bold text-center text-amber-800">
                Sign Up 🌿
              </h2>
              <p className="text-center text-sm text-gray-600 mt-2">
                Start your natural beauty journey
              </p>
            <form>
              <div className="mt-8">
                <input
                  name="username"
                  placeholder="Username or email"
                  value={user.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border focus:border-amber-600 outline-none"
                />
              </div>

              <div className="mt-4 flex items-center border rounded-full focus-within:border-amber-600">
                <input
                  name="password"
                  type={hidepass ? "password" : "text"}
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full outline-none"
                />
                <span
                  onClick={() => setHidepass(!hidepass)}
                  className="mr-3 text-amber-900 cursor-pointer"
                >
                  {hidepass ? <IoEyeOff /> : <IoEye />}
                </span>
              </div>

              <div className="mt-4 flex items-center border rounded-full focus-within:border-amber-600">
                <input
                  name="cnfpass"
                  type={hidepass ? "password" : "text"}
                  placeholder="Confirm password"
                  value={user.cnfpass}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full outline-none"
                />
              </div>

              <button className="mt-6 w-full py-3 rounded-full bg-linear-to-r from-[#e9bf8f] via-[#C68642] to-[#8B5E34] text-white hover:scale-105 transition">
                Sign Up
              </button>
              </form>

              <p className="text-center text-sm mt-6">
                Have an account?{" "}
                <button
                  onClick={changeForm}
                  className="text-amber-600 font-semibold"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* helpers */}
      <style>{`
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
      
    </div>

  );
}
