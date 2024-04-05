import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import Section from '../components/Section';

export default function Home() {
  const [t] = useTranslation();

  return (
    <Section>
      <div className='w-full h-[400px] bg-slate-500'></div>

      <p className=' flex w-[600px] text-center m-[3rem]'>
        Lorem ipsum dolor sit amet consectetur. Ut commodo accumsan pulvinar
        faucibus ut nulla scelerisque fermentum.
      </p>

      <div className='flex gap-8'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
}
