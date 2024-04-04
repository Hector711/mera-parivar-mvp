import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Método 2
export const LANGUAGES = [
  { label: 'Spanish', code: 'es' },
  { label: 'English', code: 'en' },
  { label: 'Italian', code: 'it' },
];

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

export default function Navbar() {
  const [t, i18n] = useTranslation();
  const onChangeLang = e => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <nav>
      <NavLink className={isActive} to='/'>
        Home
      </NavLink>
      <NavLink className={isActive} to='/contact'>
        Contact
      </NavLink>
      <NavLink className={isActive} to='/donations'>
        Donations
      </NavLink>
      <NavLink className={isActive} to='/project'>
        Project
      </NavLink>

      <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>

      <NavLink className={isActive} to='/'>
        {t('home')} asjdlksd
      </NavLink>

      <h1>{t('about')}</h1>
      <span>{t('user', { name: 'Bruce Wayne 🦇' })}</span>
    </nav>
  );
}
