import Logo from './Logo';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import CallToAction from './CallToAction';

import SocialLink from './SocialLink';
import Section from './Section';

export default function Footer() {
  return (
    <footer>
      <Section tail='flex w-full justify-between items-center'>
        <Logo />
        <div>
          <p className='bold text-white'>Location</p>
          <p className='w-[400px] text-white'>
            Bihari Sabji Mandi near Raj boutique Rajiv Nagar Gurgaon Haryana -
            India
          </p>
        </div>
        <CallToAction to='/donate'>DONATE</CallToAction>
        <CallToAction to='/contactus'>CONTACT US</CallToAction>

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
      </Section>
    </footer>
  );
}
