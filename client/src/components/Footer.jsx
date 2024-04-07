import Logo from './Logo';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import ActionButton from '../components/ActionButton';

import SocialLink from './SocialLink';

export default function Footer() {
  return (
    <footer className='w-full h-[7rem] flex justify-around items-center bg-slate-400'>
      <Logo />
      <div>
        <p>Location</p>
        <p className='w-[400px]'>
          Bihari Sabji Mandi near Raj boutique Rajiv Nagar Gurgaon Haryana -
          India
        </p>
      </div>
      <ActionButton>DONATE</ActionButton>
      <ActionButton>CONTACT US</ActionButton>

      <div id='social-links-container'>
        <IconContext.Provider value={{ className: 'global-class-name' }}>
          <SocialLink link='https://www.facebook.com/MeraParivarNgo'>
            <FaFacebookF />
          </SocialLink>
          <SocialLink link='https://twitter.com/ParivarNgo'>
            <FaXTwitter />
          </SocialLink>
          <SocialLink link='https://www.youtube.com/channel/UCR-GwOXZNqWFsKASl63I1xA'>
            <FaYoutube />
          </SocialLink>
          <SocialLink link='https://www.instagram.com/meraparivar/'>
            <FaInstagram />
          </SocialLink>
          <SocialLink link='https://www.linkedin.com/in/anil-landge-7b4115157/'>
            <FaLinkedinIn />
          </SocialLink>
        </IconContext.Provider>
      </div>
    </footer>
  );
}
