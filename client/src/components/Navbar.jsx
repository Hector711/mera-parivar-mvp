import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelection from './LanguageSelection';
// import { useTranslation } from 'react-i18next';
import AboutDrop from './AboutDrop';
import WhatWeDoDrop from './WhatWeDoDrop';
import GetInvolvedDrop from './GetInvolvedDrop';
import logo from '../../public/logo.png'

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

const listItem = document.querySelectorAll('#nav-header .navLinks');
const menuBackDrop = document.querySelector('#menu-backdrop');

listItem.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const { left, top, width, height } = item.getBoundingClientRect();

    menuBackDrop.style.setProperty('--left', `${left}px`);
    menuBackDrop.style.setProperty('--top', `${top}px`);
    menuBackDrop.style.setProperty('--width', `${width}px`);
    menuBackDrop.style.setProperty('--height', `${height}px`);

    menuBackDrop.style.opacity = '1';
    menuBackDrop.style.visibility = 'visible';
  });

  item.addEventListener('mouseleave', () => {
    menuBackDrop.style.opacity = '0';
    menuBackDrop.style.visibility = 'hidden';
  });
});

export default function Navbar() {
  // const [t] = useTranslation();

  return (
    <nav id='nav-header'>
      <div className='nav-links-container'>
        <NavLink className='{isActive} navLinks' to='/'>
          <img src={logo} alt='HOME' className='logo' />
        </NavLink >
        <AboutDrop className='navLinks' header='ABOUT US'/>
        <WhatWeDoDrop className='navLinks' header='WHAT WE DO'/>
        <GetInvolvedDrop className='navLinks' header='GET INVOLVED'/>
        <NavLink className='{isActive} navLinks' to='/donate'>
        <h4>DONATE</h4>
          
        </NavLink>
      </div>
      <div className='flex gap-4'>
        <NavLink className='{isActive} navLinks' to='/contact'>
          <h4>CONTACT</h4>
        </NavLink>
        <LanguageSelection />
      </div>

      <div
        id='menu-backdrop'
        className={`
        absolute bg-slate-400  bg-opacity-50 backdrop-blur-lg rounded 
        translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0 w-[var(--width)] h-[var(--height)]
        transition-all duration-300 ease-in-out opacity-0 -z-10 
        `}
      ></div>
    </nav>
  );
}
