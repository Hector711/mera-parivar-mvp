import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';

export default function Contact() {
  const [t] = useTranslation();

  return (
    <>
      <Section tail=''>
        <div className='flex flex-col bg-slate-300 items-start w-[100%]'>
          <h1 className='small'>Contact Us</h1>

          <div className='flex justify-center w-[100%]'>
            <form action='submit' id='form-contact'>
              <input type='text' id='name' name='name' placeholder='Name' />
              <input type='email' id='email' name='email' placeholder='Email' />
              <input
                type='text'
                id='subject'
                name='subject'
                placeholder='Subject'
              />
              <input
                type='text'
                id='message'
                name='message'
                placeholder='Message'
              />
              <button type='submit' id='send'>
                Send
              </button>
            </form>

            <img src='' alt='' className='w-[526px] h-[512px] bg-slate-400' />
          </div>
        </div>
      </Section>
    </>
  );
}
