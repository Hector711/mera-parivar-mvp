import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import Section from '../components/Section';

export default function Home() {
  const [t] = useTranslation();

  return (
    <Section>
      <div className='w-full h-[400px] bg-slate-500'></div>

      <p className=' flex w-[600px] text-center m-[3rem]'>
        Aquí irá una frase que irá cambiando con datos relevantes que tenemos
      </p>

      <div className='flex gap-8 w-full h-[500px] mx-[3rem]'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div>
        <img src='' alt='' />
        <div>
          <h3>Become Partner</h3>
          <p></p>
        </div>
      </div>
    </Section>
  );
}
