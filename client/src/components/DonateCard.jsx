import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { postBenefactorNonPartner } from '../service/donation';

export default function DonateCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const subscriptionStatus = watch('Subscription_status');

  const { mutate } = useMutation({
    mutationKey: 'nonpartner',
    mutationFn: postBenefactorNonPartner,
  });

  const onSubmit = async data => {
    console.log(data);
    await mutate(data);
  };

  return (
    <div className='w-[1100px] border-black border-2'>
      <h1>Esta es la parte del formulario</h1>
      <form action='' id='donate-form' onSubmit={handleSubmit(onSubmit)}>
        {/* Sección de selección de moneda */}
        <div>
          <p>Select a currency:</p>
          <label>
            <input type='radio' value='Rupee' {...register('currency')} /> Rupee
          </label>
          <label>
            <input type='radio' value='Euro' {...register('currency')} /> Euro
          </label>
          <label>
            <input type='radio' value='Dollar' {...register('currency')} />{' '}
            Dollar
          </label>
          <label>
            <input type='radio' value='Pound' {...register('currency')} /> Pound
          </label>
        </div>

        <input type='text' id='name' {...register('name')} placeholder='Name' />
        <input
          type='email'
          id='email'
          {...register('email')}
          placeholder='Email'
        />
        <div>
          <p>Would you like to make this donation every month?</p>
          <label>
            <input
              type='radio'
              value='true' // Cambiado a representar el valor booleano como string
              {...register('Subscription_status', {
                onChange: e =>
                  setValue('Subscription_status', e.target.value === 'true'), // Convierte el valor a booleano
              })}
            />{' '}
            Yes
          </label>
          <label>
            <input
              type='radio'
              value='false' // Cambiado a representar el valor booleano como string
              {...register('Subscription_status', {
                onChange: e =>
                  setValue('Subscription_status', e.target.value === 'false'), // Convierte el valor a booleano
              })}
            />{' '}
            No
          </label>
        </div>
        {/* Otros campos del formulario aquí */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
