

import React from "react";
import { FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* WildSprout Beauty */}
        <div className="">
          <h2 className="text-xl font-bold mb-3">WildSprout Beauty</h2>
          <p className="text-gray-300 mb-3">
            Bringing beauty to your life with natural products. Experience the essence of wellness and self-care with WildSprout Beauty.
          </p>
          <div className="flex items-center gap-8">
          <a href=''><FaFacebook size={24} s={true} className='text-white hover:text-blue-500'/></a>
         <a href='https://www.instagram.com/wildsprout_beauty?igsh=MXhienU0Z3lnd2h5cQ==' target='_blank'><FaInstagram size={24} s={true} className='text-white hover:text-rose-400 ' /></a>
      </div>
        
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Products</a></li>
            <li><a href="#" className="hover:text-white transition">Reviews</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-1 ">
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Greenway Rd, Wardha, Maharashtra 442001
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +91 9322649906
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@wildsproutbeauty.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-800 my-6" />

      <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <span>© 2026 WildSprout Beauty. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Designed by <strong> <a href="https://portfolio2-delta-two-45.vercel.app/" target="_blank">Koshal</a></strong></span>
      </div>
    </footer>
  );
};

export default Footer;
