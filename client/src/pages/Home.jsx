import { useTranslation } from 'react-i18next';

export default function Home() {
  const [t] = useTranslation();

  return (
    <section>
      <div id='main-img' className='w-full h-[400px] bg-slate-300'></div>

      <p className=' flex w-[600px] '>
        Lorem ipsum dolor sit amet consectetur. Ut commodo accumsan pulvinar
        faucibus ut nulla scelerisque fermentum.
      </p>
    </section>
  );
}
