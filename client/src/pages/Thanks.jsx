import React from 'react';
import Section from '@/components/Section';
import WideImage from '../components/WideImage';
import CarouselQuotes from '../components/CarouselQuotes';
import img_wide_thanks from '../assets/img_wide_thanks.jpeg';
import Card from '../components/Card';
import card_1 from '../assets/card_1.jpeg';
import card_2 from '../assets/card_2.jpeg';
import card_3 from '../assets/card_3.jpeg';
import card_4 from '../assets/card_4.jpeg';
import { useTranslation } from 'react-i18next';



export default function Thanks() {
  const [t] = useTranslation();
  const carousel_quotes = [
    {
      quote: t('carousel_quotes.q_1'),
    },
    {
      quote: t('carousel_quotes.q_2'),
    },
    {
      quote: t('carousel_quotes.q_3'),
    },
    {
      quote: t('carousel_quotes.q_4'),
    },
    {
      quote: t('carousel_quotes.q_5'),
    },
  ];
  return (
    <>
      <WideImage img={img_wide_thanks} alt=''>
        <h1 className='large flex w-[100%] justify-center'>
        {t('thank_you.header')}
        </h1>
      </WideImage>
      <Section>
        <CarouselQuotes quotes={carousel_quotes} />
      </Section>
      <Section tail='flex w-full justify-between'>
      <Card
          header={t('cards.c_1.header')}
          img={card_1}
          imgName=''
          label={t('cards.c_1.label')}
          color='blue'
          hoverCardText={t('cards.c_1.hover')}
          link='/education-for-children'
          cardText={t('cards.c_1.text')}
        />
        <Card
          header={t('cards.c_2.header')}
          img={card_2}
          imgName=''
          label={t('cards.c_2.label')}
          color='blue'
          hoverCardText={t('cards.c_2.hover')}
          link='/'
          cardText={t('cards.c_2.text')}
        />
        <Card
          header={t('cards.c_3.header')}
          img={card_3}
          imgName=''
          label={t('cards.c_3.label')}
          color='yellow'
          hoverCardText={t('cards.c_3.hover')}
          link='/'
          cardText={t('cards.c_3.text')}
        />
        <Card
          header={t('cards.c_4.header')}
          img={card_4}
          imgName=''
          label={t('cards.c_4.label')}
          color='yellow'
          hoverCardText={t('cards.c_4.hover')}
          link='/'
          cardText={t('cards.c_4.text')}
        />
      </Section>
    </>
  );
}
