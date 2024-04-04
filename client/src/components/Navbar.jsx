import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelection from './LanguageSelection';
import { useTranslation } from 'react-i18next';

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

export default function Navbar() {
  const [t] = useTranslation();

  return (
    <nav>
      <div id='nav-links'>
        <NavLink className={isActive} to='/'>
          {t('home')}
        </NavLink>
        <NavLink className={isActive} to='/contact'>
        {t('contact')}
        </NavLink>
        <NavLink className={isActive} to='/donations'>
        {t('donations')}
        </NavLink>
        <NavLink className={isActive} to='/project'>
        {t('project')}
        </NavLink>
      </div>
      <div>
        <LanguageSelection />
      </div>
    </nav>
  );
}
