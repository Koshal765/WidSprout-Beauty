
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";

export default function Contact() {
const form = useRef();
    const [isSent, SetisSent] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
                    "service_xext9md" ,  //service id
                       "template_srwopfk" ,    //template id
               form.current,
                      "UPcvhW3YTyJSYgAR0"        //public key
        ).then(()=>{
            SetisSent(true);
            form.current.reset();
            toast.success("Message sent succesfully! ✅")
        },(error)=>{
            toast.error("Failed to send Message", error)
        })
      }

  return (
    <section
      id="Contact"
      className="w-full min-h-screen flex items-center py-24 bg-[#f6efe4] bg-cover bg-center"
    >
      <div className="max-w-[1100px] w-full mx-auto px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-serif font-bold text-amber-900 mb-12"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-serif font-semibold text-amber-900 mb-6">
              WildSprout Beauty — We’re here to help 🌱
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Whether you have feedback, product questions, or collaboration
              inquiries — we’d love to hear from you.
            </p>

            <div className="space-y-4 text-gray-800">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-700" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-amber-700" /> support@wildsproutbeauty.com
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a className="p-3 rounded-full border border-amber-700 hover:bg-amber-700 hover:text-white transition" href="#">
                <FaFacebookF size={18} />
              </a>
              <a className="p-3 rounded-full border border-amber-700 hover:bg-amber-700 hover:text-white transition" href="https://www.instagram.com/wildsprout_beauty?igsh=MXhienU0Z3lnd2h5cQ==" target="_blank">
                <FaInstagram size={18} />
              </a>
            </div>
      <div className="flex mt-6 items-center gap-2 text-amber-900 transition-all hover:scale-105 cursor-pointer">
        <MdKeyboardArrowLeft />
        <Link to="/" className="text-amber-900 underline inline-block">Back to Home</Link>
      </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl space-y-5"
            ref={form}
            onSubmit={sendEmail}
        >
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-amber-200 rounded-xl px-4 py-3 outline-none focus:border-amber-600 transition"
             name="user_name"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-amber-200 rounded-xl px-4 py-3 outline-none focus:border-amber-600 transition"
               name="user_email" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border border-amber-200 rounded-xl px-4 py-3 outline-none focus:border-amber-600 transition resize-none"
               name="message"></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-700 text-white font-semibold hover:bg-amber-900 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
        <ToastContainer position="top-center" autoClose={3000}hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover transition={Slide}
/>
      </div>
    </section>
  );
}
