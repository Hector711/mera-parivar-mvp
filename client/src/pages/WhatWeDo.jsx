import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';
import ButtonDonate from '@/components/ButtonDonate';
import ButtonPartner from '@/components/ButtonPartner';
import CarouselImages from '@/components/CarouselImages';
import carousel_1 from '../assets/carousel_1.jpg';
import carousel_2 from '../assets/carousel_2.jpg';
import carousel_3 from '../assets/carousel_3.jpg';
import carousel_4 from '../assets/carousel_4.jpg';
import carousel_5 from '../assets/carousel_5.jpg';

const caroursel_imgs = [
  {
    src: carousel_1,
    alt: '1',
  },
  {
    src: carousel_2,
    alt: '2',
  },
  {
    src: carousel_3,
    alt: '3',
  },
  {
    src: carousel_4,
    alt: '4',
  },
  {
    src: carousel_5,
    alt: '5',
  },
];
export default function WhatWeDo() {
  const [t] = useTranslation();
  return (
    <>
      <CarouselImages images={caroursel_imgs} />
      {/* EDUCATION FOR CHILDREN PLANS */}
      <Section tail='flex flex-col gap-4' id='education-section'>
        <h1 className='small'>{t('what_we_do.body.title')}</h1>
        <p>{t('what_we_do.body.text_1')} </p>
        <ul>
          <p className='bold'>{t('what_we_do.body.text_2')}</p>
          <li>
            &#8226; {t('what_we_do.body.text_3')}
          </li>
          <li>
            &#8226; {t('what_we_do.body.text_3')}
          </li>
        </ul>
        <ul>
          <p className='bold'>
          {t('what_we_do.body.text_5')}
          </p>
          <li>
            &#8226; {t('what_we_do.body.text_6')}
          </li>
        </ul>
        <ul>
          <p className='bold'>{t('what_we_do.body.text_7')}</p>
          <li>
            &#8226; {t('what_we_do.body.text_8')}
          </li>
        </ul>
        <p>{t('what_we_do.body.text_9')}</p>
        <div className='flex justify-center gap-20'>
          <ButtonDonate> {t('donate.button')}</ButtonDonate>
          <ButtonPartner />
        </div>
      </Section>
    </>
  );
}
