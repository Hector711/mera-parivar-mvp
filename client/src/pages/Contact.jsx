import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { postContact } from '@/service/contact';

export default function Contact() {
  const [t] = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationKey: 'contact',
    mutationFn: postContact,
  });

  const onSubmit = async data => {
    console.log(data);
    await mutate(data);
  };

  const subjectTypes = [
    { IDSubject_type: 1, subject_name: 'Dudas y sugerencias' },
    { IDSubject_type: 2, subject_name: 'Proyectos' },
    { IDSubject_type: 3, subject_name: 'Donaciones particulares' },
    { IDSubject_type: 4, subject_name: 'Acuerdos con empresas' },
  ];

  return (
    <>
      <Section tail=''>
        <div className='flex flex-col bg-slate-300 items-start w-[100%]'>
          <h1 className='small'>Contact Us</h1>

          <div className='flex justify-center w-[100%]'>
            <form
              action='submit'
              id='form-contact'
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type='text'
                id='contact_name'
                {...register('contact_name')}
                placeholder='Name'
              />
              <input
                type='email'
                id='contact_email'
                {...register('contact_email')}
                placeholder='Email'
              />
              <select
                type='number'
                id='IDSubject_type'
                {...register('IDSubject_type')}
              >
                {subjectTypes.map(type => (
                  <option key={type.IDSubject_type} value={type.IDSubject_type}>
                    {type.subject_name}{' '}
                    {/* Assuming `name` is the field you want to display */}
                  </option>
                ))}
              </select>
              <textarea id='Text' {...register('Text')} placeholder='Message' />
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
