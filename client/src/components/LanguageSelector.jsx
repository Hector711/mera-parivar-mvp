import Select from 'react-select';
import flag_uk from '../assets/flag_uk.svg';
import flag_spain from '../assets/flag_spain.svg';
import { useTranslation } from 'react-i18next';

const options = [
  {
    value: 'es',
    label: 'Spanish',
    code: 'es',
    flag: { flag_uk },
    alt: 'Spanish Language',
  },
  {
    value: 'en',
    label: 'English',
    code: 'en',
    flag: { flag_spain },
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
    <>
      <Select
        id='language-selector'
        options={options}
        // defaultValue={i18n.language}
        onChange={onChangeLang}
      />
    </>
  );
}
