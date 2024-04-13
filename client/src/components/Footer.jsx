import Logo from './Logo';
import rrss_facebook from '../assets/rrss_facebook.svg';
import rrss_instagram from '../assets/rrss_instagram.svg';
import rrss_x from '../assets/rrss_x.svg';
import rrss_youtube from '../assets/rrss_youtube.svg';
import ButtonDonate from './ButtonDonate';
import { NavLink } from 'react-router-dom';

import SocialLink from './SocialLink';
import Section from './Section';

export default function Footer() {
  return (
    <footer>
      <Section tail='flex w-full justify-between items-center'>
        <Logo />
        <div>
          <p className='caption text-white'>Location</p>
          <p className='w-[400px] text-white caption'>
            Bihari Sabji Mandi near Raj boutique Rajiv Nagar Gurgaon Haryana -
            India
          </p>
        </div>
        <ButtonDonate />
        <div id='social-links-container'>
          <SocialLink link='https://www.facebook.com/MeraParivarNgo'>
            <img src={rrss_facebook} alt='' />
          </SocialLink>
          <SocialLink link='https://www.facebook.com/MeraParivarNgo'>
            <img src={rrss_instagram} alt='' />
          </SocialLink>
          <SocialLink link='https://www.facebook.com/MeraParivarNgo'>
            <img src={rrss_x} alt='' />
          </SocialLink>
          <SocialLink link='https://www.facebook.com/MeraParivarNgo'>
            <img src={rrss_youtube} alt='' />
          </SocialLink>

          <NavLink className='nav-link' id='contact-footer' to='/contact'>
            CONTACT US
          </NavLink>
        </div>
      </Section>
    </footer>
  );
}
