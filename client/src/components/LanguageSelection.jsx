import { useTranslation } from 'react-i18next';

// Método 2
export const LANGUAGES = [
  { label: 'Spanish', code: 'es' },
  { label: 'English', code: 'en' },
];
import React from 'react';

export default function LanguageSelection() {
  const [t, i18n] = useTranslation();
  const onChangeLang = e => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <select
      defaultValue={i18n.language}
      onChange={onChangeLang}
      id='language-selector'
    >
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}

// {{props.pages}.map(({ header, link }) => (
//   <li className='dd_li'>
//   <a href={link} className='dd_anchor'>
//     {header}
//   </a>
// </li>
//   <option key={code} value={code}>
//     {label}
//   </option>
// ))}
