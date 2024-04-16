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

const carousel_quotes = [
  {
    quote:
      'Since 2014, our interventions with stakeholders and key allies in local communities have reached 7 states and 18 districts throughout India.',
  },
  {
    quote:
      '+2.5 million children´s lives positively impacted through education.',
  },
  {
    quote:
      '+ 12.45 million benefited from surplus vegetable and cooked food distribution',
  },
  {
    quote:
      '2 million government school children with clean water facilities in rural areas',
  },
  {
    quote:
      '+ 12.45 million benefited surplus Vegetable & cook Food distribution',
  },
];

export default function Thanks() {
  const [t] = useTranslation();
  return (
    <>
      <WideImage img={img_wide_thanks} alt=''>
        <h1 className='large flex w-[100%] justify-center'>
          THANKS FOR YOUR DONATION
        </h1>
      </WideImage>
      <Section>
        <CarouselQuotes quotes={carousel_quotes} />
      </Section>
      <Section tail='flex w-full justify-between'>
        <Card
          header='Education for children'
          img={card_1}
          imgName=''
          label='Program'
          color='blue'
          hoverCardText='Early literacy is key to educational and economic opportunities in the global economy, but 100s of millions of children are being left behind.'
          link='/'
          cardText='To build a better future for the children of Gurgaon.'
        />
        <Card
          header='Women Empowerment'
          img={card_2}
          imgName=''
          label='Program'
          color='blue'
          hoverCardText='At the Women’s Education Project’s Leadership and Financial Independence program, vibrant, young women from underserved communities are empowered to become self-sufficient, robust, enlightened, and adept leaders, contributors.'
          link='/'
          cardText='To help the community girls and young ladies became entrepreneurs.'
        />
        <Card
          header='IT WILL BE'
          img={card_3}
          imgName=''
          label='Partner'
          color='yellow'
          hoverCardText='Faced with the great challenges posed by technology, respect for digital rights is a key element in the path towards a humanistic digitalization.'
          link='/'
          cardText='This Spanish NGO collaborates by helping the digitalization of our educational project.
          '
        />
        <Card
          header='Central Government'
          img={card_4}
          imgName=''
          label='Partner'
          color='yellow'
          hoverCardText='Our food bank is backed by the Central Government of India, collaborating to fight hunger. Together, we make it possible to feed those in need.'
          link='/'
          cardText='We have an agreement with The Central Government of India, which helps in the food bank initiative.'
        />
      </Section>
    </>
  );
}
