import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/LanguageSelector';
import Dropdown from '@/components/Dropdown';
import Logo from '@/components/Logo';
import ButtonDonate from '@/components/ButtonDonate';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [t] = useTranslation();
  const aboutUsLinks = [
    { header: t('about_us.dd_1'), link: '/' },
    { header: t('about_us.dd_2'), link: '/' },
    { header: t('about_us.dd_3'), link: '/' },
  ];
  const whatWeDoLinks = [
    { header: t('what_we_do.dd_1'), link: '/whatwedo' },
    { header: t('what_we_do.dd_2'), link: '/whatwedo' },
    { header: t('what_we_do.dd_3'), link: '/whatwedo' },
    { header: t('what_we_do.dd_4'), link: '/whatwedo' },
    { header: t('what_we_do.dd_5'), link: '/whatwedo' },
    { header: t('what_we_do.dd_6'), link: '/whatwedo' },
    { header: t('what_we_do.dd_7'), link: '/whatwedo' },
  ];
  const getInvolvedLinks = [
    { header: t('get_involved.dd_1'), link: '/getinvolved' },
    { header: t('get_involved.dd_2'), link: '/getinvolved' },
    { header: t('get_involved.dd_3'), link: '/getinvolved' },
  ];
  return (
    <nav>
      <div id='nav-container'>
        <div className='nav-containers'>
          <Logo />
          <div id='nav-resposive'>
            <Dropdown
              header={t('about_us.header')}
              to='/'
              pages={aboutUsLinks}
            />
            <Dropdown
              header={t('what_we_do.header')}
              to='/whatwedo'
              pages={whatWeDoLinks}
            />
            <Dropdown
              header={t('get_involved.header')}
              to='/getinvolved'
              pages={getInvolvedLinks}
            />
          </div>
        </div>
        <div className='nav-responsive-2'>
          <div className='nav-containers '>
            <ButtonDonate />
          </div>

          <div className='nav-containers'>
            <NavLink className='nav-link' to='/contact'>
              {t('contact_us.header')}
            </NavLink>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
