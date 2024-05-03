import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  {
    label: 'Español',
    code: 'es',
  },
  {
    label: 'English',
    code: 'en',
  },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
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
