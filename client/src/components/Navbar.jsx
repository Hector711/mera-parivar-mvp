import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/LanguageSelector';
import Dropdown from '@/components/Dropdown';
import Logo from '@/components/Logo';
import ButtonDonate from '@/components/ButtonDonate';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const { t } = useTranslation();
  const aboutUsLinks = [
    { header: t('about_us.dd_1') },
    { header: t('about_us.dd_2') },
    { header: t('about_us.dd_3') },
  ];
  const whatWeDoLinks = [
    { header: t('what_we_do.dd_1'), link: '/education-for-children' },
    { header: t('what_we_do.dd_2') },
    { header: t('what_we_do.dd_3') },
    { header: t('what_we_do.dd_4') },
    { header: t('what_we_do.dd_5') },
    { header: t('what_we_do.dd_6') },
    { header: t('what_we_do.dd_7') },
  ];
  const getInvolvedLinks = [
    { header: t('get_involved.dd_1') },
    { header: t('get_involved.dd_2'), link: '/become-a-partner' },
    { header: t('get_involved.dd_3') },
  ];
  return (
    <nav>
      <div id='nav-container'>
        <div className='nav-containers'>
          <Logo />
          <div id='nav-resposive'>
            <Dropdown header={t('about_us.header')} pages={aboutUsLinks} />
            <Dropdown header={t('what_we_do.header')} pages={whatWeDoLinks} />
            <Dropdown
              header={t('get_involved.header')}
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
