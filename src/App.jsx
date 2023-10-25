import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'


const App = () => {
  return (
    <BrowserRouter>
   
    <div>
      <Navbar />
      
    </div>

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ItemDetailContainer />} />
      <Route path="/category/:category" element={<ItemListContainer />} />
    

    </Routes>
   
    </BrowserRouter>
  )
}

export default App