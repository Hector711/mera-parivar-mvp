import { api } from './api';

const postBenefactors = async ({
  name,
  email,
  company_name,
  company_role,
  message,
}) => {
  // Ensure `api` is an instance of an HTTP client like Axios configured elsewhere
  const { data } = await api.post('/partner', {
    name,
    email,
    company_name,
    company_role,
    message,
  });
  return data;
};

export { postBenefactors };
