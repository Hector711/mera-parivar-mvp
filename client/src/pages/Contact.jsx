import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';
import { set, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { postContact } from '@/service/contact';
import { useState, useEffect } from 'react';
import img_contact from '../assets/img_contact.jpeg';
import ButtonRegular from '../components/ButtonRegular';

export default function Contact() {
  const [t] = useTranslation();
  const [messageSent, setMessageSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate } = useMutation({
    mutationKey: 'contact',
    mutationFn: postContact,
  });

  const onSubmit = async data => {
    await mutate(data);
    setMessageSent(true);
    reset();
  };

  useEffect(() => {
    let timer;
    if (messageSent) {
      timer = setTimeout(() => {
        setMessageSent(false);
      }, 3000); // 3000 milliseconds = 3 seconds
    }
    return () => clearTimeout(timer);
  }, [messageSent]);

  const subjectTypes = [
    { IDSubject_type: 1, subject_name: t('forms.questions') },
    { IDSubject_type: 2, subject_name: t('forms.projects') },
    { IDSubject_type: 3, subject_name: t('forms.individual') },
    { IDSubject_type: 4, subject_name: t('forms.partner_agreements') },
  ];

  return (
    <>
      <Section tail='flex flex-col '>
        <h1 className='large text-left mb-8'>Contact Us</h1>
        <div className='flex w-full justify-between'>
          <form
            action='submit'
            id='form-contact'
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type='text'
              id='contact_name'
              {...register('contact_name', { required: 'Required field' })}
              aria-invalid={errors.contact_name ? 'true' : 'false'}
              placeholder={t('forms.name')}
            />
            {errors.contact_name && (
              <p role='alert'>{errors.contact_name.message}</p>
            )}
            <input
              type='email'
              id='contact_email'
              {...register('contact_email', { required: 'Required field' })}
              aria-invalid={errors.contact_email ? 'true' : 'false'}
              placeholder={t('forms.email')}
            />
            {errors.contact_email && (
              <p role='alert'>{errors.contact_email.message}</p>
            )}

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
            <textarea
              id='Text'
              {...register('Text', { required: 'Required field' })}
              aria-invalid={errors.Text ? 'true' : 'false'}
              placeholder={t('forms.message')}
            />
            {errors.Text && <p role='alert'>{errors.Text.message}</p>}
            <ButtonRegular id='send'>{t('forms.send')}</ButtonRegular>

            {/* <button type='submit' id='send'>
                Send
              </button> */}
            {messageSent && <p id='message-sent'>{t('forms.message_sent')}</p>}
          </form>
          <img
            src={img_contact}
            alt=''
            className='w-[526px] h-[512px] bg-slate-400'
          />
        </div>
      </Section>
    </>
  );
}
