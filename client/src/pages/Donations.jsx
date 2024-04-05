import { useTranslation } from 'react-i18next';

export default function Donations () {
  const [t] = useTranslation();

  return (
    <>
      <h1>{t('donations')}</h1>
    </>
  )
}