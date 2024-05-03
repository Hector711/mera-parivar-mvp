import Card from '@/components/Card';
import Section from '@/components/Section';
import ButtonPartner from '../components/ButtonPartner';
import CarouselImages from '@/components/CarouselImages';
import CarouselQuotes from '../components/CarouselQuotes';
import carousel_1 from '../assets/carousel_1.jpg';
import carousel_2 from '../assets/carousel_2.jpg';
import carousel_3 from '../assets/carousel_3.jpg';
import carousel_4 from '../assets/carousel_4.jpg';
import carousel_5 from '../assets/carousel_5.jpg';
import card_1 from '../assets/card_1.jpeg';
import card_2 from '../assets/card_2.jpeg';
import card_3 from '../assets/card_3.jpeg';
import card_4 from '../assets/card_4.jpeg';
import img_home from '../assets/img_home.jpg';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
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
      <CarouselImages images={caroursel_imgs} />
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
      {/* BECOME A PARTNER-HOME SECTION */}
      <Section tail='flex w-full justify-between gap-16'>
        <img src={img_home} alt='home-img' className='w-[50%] h-[240px]' />
        <div className='w-[50%] flex flex-col gap-4'>
          <ButtonPartner />
          <p className='h-full'>
            {t('home.section_1.text_1')}
            <br />
            <br />
            {t('home.section_1.text_2')}
            <br />
            <br />
            {t('home.section_1.text_3')}
          </p>
        </div>
      </Section>
    </>
  );
}
