import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../service/api';
import ButtonRegular from './ButtonRegular';
import { useTranslation } from 'react-i18next';

export default function FormDonate() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    // Envía la moneda seleccionada al servidor y espera el Payment Link
    try {
      const response = await api.post('/create-checkout-session', {
        currency: data.currency,
        email: data.email,
        name: data.name,
        Subscription_status: data.Subscription_status,
      });
      window.location.href = response.data.url; // Redirige al usuario al Payment Link
    } catch (error) {
      console.error(
        'There was an error:',
        error.response?.data?.error || error.message,
      );
    }
  };

  return (
    <div className='w-[752px] '>
      <form id='donate-form' onSubmit={handleSubmit(onSubmit)}>
        <p className='bold' id='personal-information'>
          {t('forms.personal_information')}
        </p>
        <input
          type='text'
          {...register('name', { required: 'Required field' })}
          aria-invalid={errors.name ? 'true' : 'false'}
          placeholder={t('forms.name')}
          id='donate-name'
        />
        {errors.name && (
          <p className='error' id='error-name'>
            {errors.name.message}
          </p>
        )}
        <input
          type='email'
          {...register('email', { required: 'Required field' })}
          aria-invalid={errors.email ? 'true' : 'false'}
          placeholder={t('forms.email')}
          id='donate-email'
        />
        {errors.email && (
          <p className='error' id='error-email'>
            {errors.email.message}
          </p>
        )}
        <p className='bold' id='select-currency'>
          {t('forms.select_currency')}
        </p>
        <select {...register('currency')} id='currency'>
          <option value=''>-- {t('forms.select_currency')} --</option>
          <option value='USD'>Dollar - &#36;</option>
          <option value='EUR'>Euro - &#8364;</option>
          <option value='INR'>Rupee - &#8377;</option>
          <option value='GBP'>Pound - &#163;</option>
        </select>
        <p className='bold' id='every-month'>
          {t('forms.month')}
        </p>
        <select {...register('Subscription_status')} id='subscription'>
          <option value=''>
            -- {t('forms.yes')} / {t('forms.no')} --
          </option>
          <option value='true'>{t('forms.yes')}</option>
          <option value='false'>{t('forms.no')}</option>
        </select>

        <ButtonRegular>{t('donate.header')}</ButtonRegular>
      </form>
    </div>
  );
}
