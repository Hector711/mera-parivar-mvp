import { api } from './api';

const postBenefactors = async ({
  name,
  email,
  company_name,
  company_role,
  message,
  IDdonation_type,
}) => {
  const { data } = await api.post('/partner', {
    name,
    email,
    company_name,
    company_role,
    message,
    IDdonation_type,
  });

  return data;
};

export { postBenefactors };
