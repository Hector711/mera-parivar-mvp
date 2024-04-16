import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import ButtonPartner from '@/components/ButtonPartner';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { postBenefactors } from '@/service/partner';
import { useState, useEffect } from 'react';
import card_1 from '../assets/card_1.jpeg';
import card_2 from '../assets/card_2.jpeg';
import CarouselImages from '../components/CarouselImages';
import img_logos from '../assets/img_logos.png';
import carousel_1 from '../assets/carousel_1.jpg';
import carousel_2 from '../assets/carousel_2.jpg';
import carousel_3 from '../assets/carousel_3.jpg';
import carousel_4 from '../assets/carousel_4.jpg';
import carousel_5 from '../assets/carousel_5.jpg';

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

function scrollToSection() {
  const section = document.getElementById('form-get');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function GetInvolved() {
  const [t] = useTranslation();
  const [messageSent, setMessageSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate } = useMutation({
    mutationKey: 'partner',
    mutationFn: postBenefactors,
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

  const donationTypes = [
    // { IDdonation_type: 0, donation_name: '- Select donation type -' },
    { IDdonation_type: 1, donation_name: t('forms.money') },
    { IDdonation_type: 2, donation_name: t('forms.food') },
    { IDdonation_type: 3, donation_name: t('forms.material') },
    { IDdonation_type: 4, donation_name: t('forms.others') },
  ];

  return (
    <>
      <CarouselImages images={caroursel_imgs} />
      {/* BECOME A PARTNER */}
      <Section
        tail='flex flex-col justify-center items-center gap-10'
        id='partner-section'
      >
        <div className='flex flex-col gap-6 justify-center items-center'>
          <h1 className='small'>{t('get_involved.body.title')}</h1>
          <p>{t('get_involved.body.text_1')}</p>
          <p>{t('get_involved.body.text_2')}</p>
          <p>
            <span className='bold'>{t('get_involved.body.text_3.span')}</span>
            {t('get_involved.body.text_3.p')}
          </p>

          <ul>
            <p>{t('get_involved.body.text_4')}</p>
            <li>
              &#8226;
              <span className='bold'>{t('get_involved.body.text_5.span')}</span>
              {t('get_involved.body.text_5.p')}
            </li>
            <li>
              &#8226;
              <span className='bold'>
                {t('get_involved.body.text_6.span')}
              </span>{' '}
              {t('get_involved.body.text_6.p')}
            </li>
            <li>
              &#8226;
              <span className='bold'>
                {t('get_involved.body.text_7.span')}
              </span>{' '}
              one of
              {t('get_involved.body.text_7.p')}
            </li>
          </ul>
        </div>
        {/* <ButtonPartner /> */}
        <button id='button-partner' onClick={scrollToSection}>
          <p>{t('get_involved.button')}</p>
        </button>
      </Section>

      {/*  CARDS AND IMAGE */}
      <Section tail='flex justify-between gap-20'>
        <img
          src={img_logos}
          alt='image logos'
          className='w-[588px] h-[434px]'
        />
        <div className='flex justify-between w-[50%] '>
          <Card
            header={t('cards.c_1.header')}
            img={card_1}
            imgName=''
            label={t('cards.c_1.label')}
            color='blue'
            hoverCardText={t('cards.c_1.hover')}
            link='/education-for-children'
            cardText={t('cards.c_1.text')}
          />
          <Card
            header={t('cards.c_2.header')}
            img={card_2}
            imgName=''
            label={t('cards.c_2.label')}
            color='blue'
            hoverCardText={t('cards.c_2.hover')}
            link='/'
            cardText={t('cards.c_2.text')}
          />
        </div>
      </Section>

      {/* FORMULARIO BECOME A PARTNER */}
      <Section tail='flex justify-center w-full' id='form-get'>
        <form
          action='submit'
          id='form-get-involved'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='text'
            id='name'
            {...register('name', { required: 'Required field' })}
            aria-invalid={errors.name ? 'true' : 'false'}
            placeholder={t('forms.name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            type='email'
            id='email'
            {...register('email', { required: 'Required field' })}
            aria-invalid={errors.email ? 'true' : 'false'}
            placeholder={t('forms.email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type='text'
            id='company_name'
            {...register('company_name', { required: 'Required field' })}
            aria-invalid={errors.company_name ? 'true' : 'false'}
            placeholder={t('forms.company')}
          />
          {errors.company_name && <p>{errors.company_name.message}</p>}
          <input
            type='text'
            id='company_role'
            {...register('company_role', { required: 'Required field' })}
            aria-invalid={errors.company_role ? 'true' : 'false'}
            placeholder={t('forms.company_role')}
          />
          {errors.company_role && <p>{errors.company_role.message}</p>}

          <select
            type='number'
            id='IDdonation_type'
            {...register('IDdonation_type')}
          >
            <option value=''>-- {t('forms.donation_type')} --</option>

            {donationTypes.map(type => (
              <option key={type.IDdonation_type} value={type.IDdonation_type}>
                {type.donation_name}{' '}
                {/* Assuming `name` is the field you want to display */}
              </option>
            ))}
          </select>

          <textarea
            id='message'
            {...register('message', { required: 'Required field' })}
            aria-invalid={errors.message ? 'true' : 'false'}
            placeholder={t('forms.message')}
          />
          {errors.message && <p>{errors.message.message}</p>}

          <button type='submit' className='button-send' id='send'>
            Send
          </button>
          {messageSent && <p>Message sent</p>}
        </form>
      </Section>
    </>
  );
}
