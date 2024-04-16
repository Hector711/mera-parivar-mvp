import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import WhatWeDo from '@/pages/WhatWeDo';
import Donate from '@/pages/Donate';
import Contact from '@/pages/Contact';
import GetInvolved from '@/pages/GetInvolved';
import Footer from '@/components/Footer';
import Thanks from '@/pages/Thanks';

export default function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education-for-children' element={<WhatWeDo />} />
          <Route path='/become-a-partner' element={<GetInvolved />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}
