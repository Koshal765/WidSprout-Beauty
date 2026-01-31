import { useState } from "react";
import { ShoppingBag, Package,  Users, BarChart3,} from "lucide-react";
import { motion } from "framer-motion";
import { AllProducts as allProducts } from '../constant';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router";


const AdminPanel=()=> {
  const [activePage, setActivePage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAdminLoggedIn") === "true"
  );

  return (
    <div className="min-h-screen bg-neutral-50  flex flex-col md:grid md:grid-cols-12 py-20">
      {/* Sidebar */}
    <motion.aside 
  initial={{ x: 0, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
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
    {["dashboard", "products", "orders", "customers", "settings"].map(
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


      {/* Main */}
      <main className="col-span-10 p-8">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "products" && <Products />}
        {activePage === "orders" && <Orders />}
        {activePage === "customers" && <Customers />}
        {activePage === "settings" && <Settings />}
      </main>
    </div>
  );
}


const Dashboard = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">
        Admin Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-10">
        <Stat icon={<ShoppingBag />} label="Total Orders" />
        <Stat icon={<Package />} label="Products" />
        <Stat icon={<Users />} label="Customers" />
        <Stat icon={<BarChart3 />} label="Revenue" />
      </div>

      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full bg-[#8B5E34] text-white hover:bg-[#6f4a29] transition">
          Add New Product
        </button>

        <button className="px-6 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition">
          View Orders
        </button>
      </div>
    </>
  );
}

const Products = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Products</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {allProducts.map((product, index) => (
    <div
      key={index}
      className="bg-amber-50 flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-xl transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.tags}</p>
      <div className="text-gray-700 font-semibold mb-4">₹{product.price}</div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition">
          <FaEdit size={20} />
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          <RiDeleteBin6Fill size={20} />
        </button>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

const Orders = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Orders</h2>
      <p className="text-neutral-500">Orders list will appear here</p>
    </>
  );
}

const Customers = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Customers</h2>
      <p className="text-neutral-500">Customer list will appear here</p>
    </>
  );
}

const Settings = () => {
  const navigate = useNavigate();
const Logout=()=>{
  //logout logic here
  localStorage.removeItem("adminToken");
  localStorage.setItem("isAdminLoggedIn", "false");
  

  navigate("/login");
 
}


  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <p className="text-neutral-500">Admin settings go here</p>
      <button 
      onClick={Logout}
      className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition mt-4">Logout</button>
    </>
  );
}

const Stat = ({ icon, label }) => {
  return (
    <div className="bg-amber-100 rounded-xl shadow p-6 flex items-center gap-4 hover:shadow-md transition">
      <div className="text-[#8B5E34]">{icon}</div>
      <div>
        <p className="text-sm text-neutral-500">{label}</p>
        <p className="text-xl font-bold">—</p>
      </div>
    </div>
  );
}

export default AdminPanel;