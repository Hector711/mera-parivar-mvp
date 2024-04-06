import { useTranslation } from 'react-i18next';

export default function GetInvolved() {
  const [t] = useTranslation();

  return (
    <>
      <h1>{t('get_involved')}</h1>
    </>
  );
}
