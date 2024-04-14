// import { useTranslation } from 'react-i18next';
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

const cards_data = [
  {
    header: 'Education for children',
    img: card_1,
    imgName: '',
    label: 'Program',
    hoverCardText: 'Early literacy is key to educational and economic opportunities in the global economy, but 100s of millions of children are being left behind. They just need the opportunity. Project 1 – Bridge Schools and Remedial Classes. Running three Bridge Schools in three different urban slums of',
    link: '/',
    cardText: 'To build a better future for the children of Gurgaon.'
  },
  {
    header: 'Women Empowerment',
    img: card_2,
    imgName: '',
    label: 'Program',
    hoverCardText: 'At the Women’s Education Project’s Leadership and Financial Independence program, vibrant, young women from underserved communities are empowered to become self-sufficient, robust, enlightened, and adept leaders, contributors',
    link: '/',
    cardText: 'To help the community girls and young ladies became entrepreneurs.'
  },
  {
    header: 'IT WILL BE',
    img: card_3,
    imgName: '',
    label: 'Partner',
    hoverCardText: 'Faced with the great challenges posed by technology, respect for digital rights is a key element in the path towards a humanistic digitalization. At it-willbe.org, we made new commitments on digital rights in order to take a step forward and lead a collective reflection.',
    link: '/',
    cardText: 'This Spanish NGO collaborates by helping the digitalization of our educational project.'
  },
  {
    header: 'Central Government',
    img: card_4,
    imgName: '',
    label: 'Partner',
    hoverCardText: 'Our food bank is backed by the Central Government of India, collaborating to fight hunger. Together, we make it possible to feed those in need. Join us in this mission to provide hope and support to vulnerable communities in India.',
    link: '/',
    cardText: 'We have an agreement with The Central Government of India, which helps in the food bank initiative.'
  }
];


export default function Home() {
  // const [t] = useTranslation();
  return (
    <>
      <CarouselImages images={caroursel_imgs} />
      <Section>
        <CarouselQuotes quotes={carousel_quotes} />
      </Section>

      <Section tail='flex w-full justify-between'>
        <Card
          header='Education for children'
          img={card_1}
          imgName=''
          label='Program'
          hoverCardText='Early literacy is key to educational and economic opportunities in the global economy, but 100s of millions of children are being left behind. They just need the opportunity. Project 1 –  Bridge Schools and Remedial Classes. Running three Bidge Schools in three different urban slums of '
          link='/'
          cardText='To build a better future for the children of Gurgaon.'
        />
        <Card
          header='Women Empowerment'
          img={card_2}
          imgName=''
          label='Program'
          hoverCardText='At the Women’s Education Project’s Leadership and Financial Independence program, vibrant, young women from underserved communities are empowered to become self-sufficient, robust, enlightened, and adept leaders, contributors'
          link='/'
          cardText='To help the community girls and young ladies became entrepreneurs.'
        />
        <Card
          header='IT WILL BE'
          img={card_3}
          imgName=''
          label='Partner'
          hoverCardText='Faced with the great challenges posed by technology, respect for digital rights is a key element in the path towards a humanistic digitalization. At it-willbe.org, we made new commitments on digital rights in order to take a step forward and lead a collective reflection. '
          link='/'
          cardText='This Spanish NGO collaborates by helping the digitalization of our educational project.
          '
        />
        <Card
          header='Central Government'
          img={card_4}
          imgName=''
          label='Partner'
          hoverCardText='Our food bank is backed by the Central Government of India, collaborating to fight hunger. Together, we make it possible to feed those in need. Join us in this mission to provide hope and support to vulnerable communities in India.'
          link='/'
          cardText='We have an agreement with The Central Government of India, which helps in the food bank initiative.'
        />
      </Section>
      {/* BECOME A PARTNER-HOME SECTION */}
      <Section tail='flex w-full justify-between gap-16'>
        <img src={img_home} alt='home-img' className='w-[50%] h-[240px]' />
        <div className='w-[50%] flex flex-col gap-4'>
          <ButtonPartner />
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
