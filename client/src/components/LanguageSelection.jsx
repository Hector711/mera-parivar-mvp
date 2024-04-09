import { useTranslation } from 'react-i18next';

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
