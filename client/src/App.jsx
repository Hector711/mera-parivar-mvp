import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import GetInvolved from './pages/GetInvolved';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/whatwedo' element={<WhatWeDo />} />
          <Route path='/getinvolved' element={<GetInvolved />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
