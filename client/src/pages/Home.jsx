import { useTranslation } from 'react-i18next';

export default function Home() {
  const [t] = useTranslation();

  return (
    <>
      <h1>HOME PAGE</h1>
      <h2>{t('home')}</h2>
      <br />
      
    </>
  );
}
