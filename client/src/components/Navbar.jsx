import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelection from './LanguageSelection';
import { useTranslation } from 'react-i18next';

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

const listItem = document.querySelectorAll('#landing-header .navLinks');
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
  const [t] = useTranslation();

  return (
    <nav id='landing-header'>
      <div id='nav-links'>
        <NavLink className='{isActive} navLinks' to='/'>
          {t('home')}
        </NavLink>
        <NavLink className='{isActive} navLinks' to='/aboutus'>
          {t('about_us')}
        </NavLink>
        <NavLink className='{isActive} navLinks' to='/whatwedo'>
          {t('what_we_do')}
        </NavLink>
        <NavLink className='{isActive} navLinks' to='/getinvolved'>
          {t('get_involved')}
        </NavLink>
        <NavLink className='{isActive} navLinks' to='/donate'>
          {t('donate')}
        </NavLink>
        <NavLink className='{isActive} navLinks' to='/contact'>
          {t('contact')}
        </NavLink>
        <LanguageSelection />
      </div>
      <div
        id='menu-backdrop'
        className={`
        absolute bg-slate-400 backdrop-blur-lg rounded
        translate-x-[var(--left)] translate-y-[var(--top)]
        left-0 top-0
        w-[var(--width)] h-[var(--height)]
        transition-all duration-300
        ease-in-out opacity-0 -z-10
        `}
      ></div>
    </nav>
  );
}
