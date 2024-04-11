import React from 'react';
// import { useTranslation } from 'react-i18next';
import LanguageSelection from '@/components/LanguageSelection.jsx';
import Dropdown from '@/components/Dropdown';
import Logo from '@/components/Logo';
import CallToAction from '@/components/CallToAction';

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
        <Logo />
        <Dropdown header='ABOUT US' to='/aboutus' pages={aboutUsLinks} />
        <Dropdown header='WHAT WE DO' to='/whatwedo' pages={whatWeDoLinks} />
        <Dropdown
          header='GET INVOLVED'
          to='/getinvolved'
          pages={getInvolvedLinks}
        />
      </div>
      <div className='nav-containers'>
        <CallToAction to='/donate'>DONATE</CallToAction>
      </div>

      <div className='nav-containers'>
        <CallToAction to='/contact'>CONTACT</CallToAction>
        <LanguageSelection />
      </div>
    </nav>
  );
}
