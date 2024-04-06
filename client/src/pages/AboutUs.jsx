import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const [t] = useTranslation();

  return (
    <>
      <h1>{t('about_us')}</h1>

     
    </>
  );
}
