import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Private from './pages/private/Private';
import PrivateHome from './pages/private/privatepage/private-home';
import Profil from './pages/private/privatepage/private-profil';
import BurgersPage from "./pages/BurgersPage";
import MenuPage from "./pages/MenuPage";
import PrivateMenu from "./pages/private/privatepage/private-menupage";
import Order from "./pages/private/privatepage/private-order";




function App() {

  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (menu) => {
    setOrderItems(prevOrderItems => [...prevOrderItems, menu]);
  };
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menupage" element={<MenuPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
          <Route path="/private/private-profil" element={<Profil />} />
          <Route path="/private/private-menu" element={<PrivateMenu addToOrder={addToOrder} />} />
          <Route path="/private/private-order" element={<Order orderItems={orderItems}  />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
