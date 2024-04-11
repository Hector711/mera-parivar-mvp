import { api } from './api';

const postBenefactorNonPartner = async ({
  Subscription_status,
  name,
  email,
  currency,
}) => {
  try {
    // Crear el benefactor no partner
    const benefactorResponse = await api.post('/create-checkout-session', {
      Subscription_status,
      name,
      email,
      currency: currency,
    });

    // Devolver el ID de sesión de pago de Stripe
    return benefactorResponse.data.sessionId;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export { postBenefactorNonPartner };
