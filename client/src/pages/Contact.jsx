import { useTranslation } from 'react-i18next';

export default function Contact () {
  const [t] = useTranslation();

  return (
    <>
      <h1>{t('contact')}</h1>
    </>
  )
}