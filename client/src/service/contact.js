import { api } from './api';

const postContact = async ({
  contact_name,
  contact_email,
  IDSubject_type,
  Text,
}) => {
  // Ensure `api` is an instance of an HTTP client like Axios configured elsewhere
  const { data } = await api.post('/contact', {
    contact_name,
    contact_email,
    IDSubject_type,
    Text,
  });
  return data;
};

export { postContact };
