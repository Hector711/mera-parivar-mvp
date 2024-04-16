import { useTranslation } from 'react-i18next';
import flag_uk from '../assets/flag_uk.svg';
import flag_spain from '../assets/flag_spain.svg';

const LANGUAGES = [
  { 
    label: 'Español',
    code: 'es', 
    alt: 'Spanish Language' 
  },
  {
    label: 'English',
    code: 'en',
    alt: 'English Language',
  },
];

export default function LanguageSelector() {
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
      {LANGUAGES.map(({ code, label, flag, alt }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}
