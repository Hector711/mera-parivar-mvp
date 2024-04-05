import { useTranslation } from 'react-i18next';

export default function Project () {
  const [t] = useTranslation();

  return (
    <>
      <h1>{t('project')}</h1>

    </>
  )
}