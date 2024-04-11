import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../service/api';

export default function DonateCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    // Envía la moneda seleccionada al servidor y espera el Payment Link
    try {
      const response = await api.post('/create-checkout-session', {
        currency: data.currency, // Asegúrate de enviar solo la moneda
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
    <div className='w-[1100px] border-black border-2'>
      <h1>Esta es la parte del formulario</h1>
      <form id='donate-form' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('name')} placeholder='Name' />
        <input type='email' {...register('email')} placeholder='Email' />
        <select {...register('currency')}>
          <option value='USD'>Dollar</option>
          <option value='EUR'>Euro</option>
          <option value='INR'>Rupee</option>
          <option value='GBP'>Pound</option>
        </select>
        <select {...register('Subscription_status')}>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        <button type='submit'>Donate</button>
      </form>
    </div>
  );
}
