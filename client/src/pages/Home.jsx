// import { useTranslation } from 'react-i18next';
import Card from '@/components/Card';
import Section from '@/components/Section';
import CallToAction from '@/components/CallToAction';
import CarouselImages from '@/components/CarouselImages';
import CarrouselQuotes from '@/components/CarrouselQuotes';
import carr_1 from '../assets/carr_1.jpg';
import carr_2 from '../assets/carr_2.jpg';
import carr_3 from '../assets/carr_3.jpg';
import carr_4 from '../assets/carr_4.jpg';
import carr_5 from '../assets/carr_5.jpg';
import card_1 from '../assets/card_1.jpeg';
import card_2 from '../assets/card_2.jpeg';
import card_3 from '../assets/card_3.jpeg';
import card_4 from '../assets/card_4.jpeg';
import home_1 from '../assets/home_1.jpg';

const ImagesCarousel = [
  {
    src: carr_1,
    alt: '1',
  },
  {
    src: carr_2,
    alt: '2',
  },
  {
    src: carr_3,
    alt: '3',
  },
  {
    src: carr_4,
    alt: '4',
  },
  {
    src: carr_5,
    alt: '5',
  }
];

export default function Home() {
  // const [t] = useTranslation();
  return (
    <>
      <CarouselImages images={ImagesCarousel} />
      {/* PHRASES */}
      <Section tail='flex flex-col justify-center gap-3'>
        <CarrouselQuotes />
      </Section>
      {/* CARDS SECTION */}
      <Section tail='flex w-full justify-between'>
        <Card
          header='Education for children'
          img={card_1}
          imgName=''
          label='Program'
          hoverCardText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime in molestiae qui?'
          link='/'
          cardText='To build a better future for the children of Gurgaon.'
        />
        <Card
          header='Women Empowerment'
          img={card_2}
          imgName=''
          label='Program'
          hoverCardText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime in molestiae qui?'
          link='/'
          cardText='To help the community girls and young ladies became entrepreneurs.'
        />
        <Card
          header='Education for children'
          img={card_3}
          imgName=''
          label='Partner'
          hoverCardText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime in molestiae qui?'
          link='/'
          cardText='To build a better future for the children of Gurgaon.'
        />
        <Card
          header='Education for children'
          img={card_4}
          imgName=''
          label='Partner'
          hoverCardText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime in molestiae qui?'
          link='/'
          cardText='To build a better future for the children of Gurgaon.'
        />
      </Section>
      {/* BECOME A PARTNER-HOME SECTION */}
      <Section tail='flex w-full justify-between gap-16'>
        <img
          src={home_1}
          alt='home-img'
          className='w-[50%] h-[240px] shadow'
        />
        <div className='w-[50%] flex flex-col gap-4'>
          <CallToAction to='/getinvolved'>BECOME A PARTNER</CallToAction>
          <p className='h-full'>
            Lorem ipsum dolor sit amet consectetur. Pellentesque ac vitae
            malesuada integer in commodo magnis maecenas. Proin leo interdum
            amet nisi mauris augue ipsum nunc faucibus. Nullam nunc elit nisi
            tortor gravida sit sit auctor urna. Eget mauris egestas elementum
            ut. Congue fringilla et sit turpis rhoncus neque. Etiam in purus
            nullam risus quam pretium consectetur. Tempor curabitur quis sit
            vel. Turpis urna in tristique ut et duis nisl. Leo ut egestas nec
            tortor pellentesque.
          </p>
        </div>
      </Section>
    </>
  );
}