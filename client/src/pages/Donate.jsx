import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';
import FormDonate from '@/components/FormDonate';
import img_donate from '../assets/img_donate.jpg';
import img_wide from '../assets/img_wide.jpg';
import WideImage from '../components/WideImage';

export default function Donate() {
  const [t] = useTranslation();
  return (
    <>
      <WideImage img={img_wide} alt='img_wide_alt'>
        <div className='w-[640px]'>
          <h1 className='large flex'>{t('donate.header_page')}</h1>
          <p>
            Thanks to your contribution, thousands of people will have a better
            life. Let's continue building together a more just and supportive
            world!
          </p>
        </div>
      </WideImage>
      <Section>
        <div className='flex gap-24'>
          <img
            src={img_donate}
            alt='Image Donate'
            className='w-[360px] h-[403px]'
            id='img-donate'
          />
          <FormDonate />
        </div>
      </Section>
    </>
  );
}
