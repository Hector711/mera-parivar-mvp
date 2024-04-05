import { useTranslation } from 'react-i18next';

export default function WhatWeDo() {
  const [t] = useTranslation();

  return (
    <>
    <h1>{t('what_we_do')}</h1>
    </>
  )
}
