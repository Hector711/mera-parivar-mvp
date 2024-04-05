import { useTranslation } from 'react-i18next';

export default function Donate () {
  const [t] = useTranslation();

  return (
    <>
      <h1>{t('donate')}</h1>
    </>
  )
}