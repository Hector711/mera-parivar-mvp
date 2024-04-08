import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import LanguageSelection from '@/components/LanguageSelection.jsx';
import Dropdown from '@/components/Dropdown';
import Logo from '@/components/Logo';
import ActionButton from '@/components/ActionButton';

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

const aboutUsLinks = [
  { header: 'Our Mission', link: '/aboutus' },
  { header: 'Our Team', link: '/aboutus' },
  { header: 'Our Events', link: '/aboutus' },
];
const whatWeDoLinks = [
  { header: 'Education for children', link: '/whatwedo' },
  { header: 'Youth vocational & skills training', link: '/whatwedo' },
  { header: 'Girl child education', link: '/whatwedo' },
  { header: 'Advocacy & Community Assistance', link: '/whatwedo' },
  { header: 'Anti Human Traffic', link: '/whatwedo' },
  { header: 'Women Empowernment', link: '/whatwedo' },
  { header: 'Swabhiman Project', link: '/whatwedo' },
];
const getInvolvedLinks = [
  { header: 'Become a volunteer', link: '/getinvolved' },
  { header: 'Become a Partner', link: '/getinvolved' },
  { header: 'Work with us', link: '/getinvolved' },
];

export default function Navbar() {
  // const [t] = useTranslation();
  return (
    <nav id='nav-header'>
      <div className='nav-containers'>
        <NavLink className={isActive} to='/'>
          <Logo />
        </NavLink>
        <Dropdown header='ABOUT US' to='/aboutus' pages={aboutUsLinks} />
        <Dropdown header='WHAT WE DO' to='/whatwedo' pages={whatWeDoLinks} />
        <Dropdown
          header='GET INVOLVED'
          to='/getinvolved'
          pages={getInvolvedLinks}
        />
        <ActionButton className={isActive}>DONATE</ActionButton>
      </div>
      <div className='nav-containers'>
        <ActionButton className={isActive}>CONTACT</ActionButton>

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
