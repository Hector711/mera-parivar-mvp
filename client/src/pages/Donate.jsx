// import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';
import FormDonate from '@/components/FormDonate';
import img_donate from '../assets/img_donate.jpg';
import img_wide from '../assets/img_wide.jpg';

export default function Donate() {
  // const [t] = useTranslation();
  return (
    <>
      <div className='w-[100%] h-[264px]  img-wide' id='wide-container'>
        <img src={img_wide} id='img_wide' alt='' />
        <div id='text-wide'>
          <div className='w-[640px]'>
            <h1 className='large flex '>DONATE NOW</h1>
            <p>
              Thanks to your contribution, thousands of people will have a
              better life. Let's continue building together a more just and
              supportive world!
            </p>
          </div>
        </div>
      </div>
      <Section>
        <div className='flex gap-14'>
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
