import { api } from './api';

const postBenefactorNonPartner = async ({
  Subscription_status,
  name,
  email,
}) => {
  // Ensure `api` is an instance of an HTTP client like Axios configured elsewhere
  const { data } = await api.post('/nonpartner', {
    Subscription_status,
    name,
    email,
  });
  return data;
};

export { postBenefactorNonPartner };
