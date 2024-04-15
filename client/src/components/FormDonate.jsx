import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../service/api';
import ButtonRegular from './ButtonRegular';

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
    <div className='w-[852px] '>
      <form id='donate-form' onSubmit={handleSubmit(onSubmit)}>
        <p className='bold' id='personal-information'>
          Personal Information:
        </p>
        <input
          type='text'
          {...register('name')}
          placeholder='Name'
          id='donate-name'
        />
        {errors.name && <p className='text-red-500'>Email is required</p>}
        <input
          type='email'
          {...register('email')}
          placeholder='Email'
          id='donate-email'
        />
        <p className='bold' id='select-currency'>
          Select Currency:
        </p>
        <select {...register('currency')} id='currency'>
          <option value='' >- Select currency -</option>
          <option value='USD'>Dollar - &#36;</option>
          <option value='EUR'>Euro - &#8364;</option>
          <option value='INR'>Rupee - &#8377;</option>
          <option value='GBP'>Pound - &#163;</option>
        </select>
        <p className='bold' id='every-month'>
          Would you like to make this donation every month?
        </p>
        <select {...register('Subscription_status')} id='subscription'>
          <option value=''  >- Yes / No -</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <ButtonRegular>DONATE</ButtonRegular>
        {/* <button type='submit'>Donate</button> */}
      </form>
    </div>
  );
}
