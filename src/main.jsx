import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './Contact.jsx';
import AllProducts from './AllProducts.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/all_products' element={<AllProducts/>}/>
    </Routes>
     { /* <App />  */}

    </BrowserRouter>
      
  </StrictMode>,
)
