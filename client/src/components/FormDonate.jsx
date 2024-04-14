import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../service/api';

export default function FormDonate() {
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
    <div className='w-[852px] h-[403px]'>
      <form id='donate-form' onSubmit={handleSubmit(onSubmit)}>
        <div id='personal-information'>
          <p className='bold'>Personal Information:</p>
          <div id='personal-information-input'>
            <input type='text' {...register('name')} placeholder='Name' />
            <input type='email' {...register('email')} placeholder='Email' />
          </div>
        </div>
        <div id='select-currency'>
          <p className='bold'>Select Currency:</p>
          <select {...register('currency')}>
            <option value='USD'>Dollar</option>
            <option value='EUR'>Euro</option>
            <option value='INR'>Rupee</option>
            <option value='GBP'>Pound</option>
          </select>
        </div>
        <div id='every-month'>
          <p className='bold'>
            Would you like to make this donation every month?
          </p>
          <select {...register('Subscription_status')}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <button type='submit'>Donate</button>
      </form>
    </div>
  );
}
