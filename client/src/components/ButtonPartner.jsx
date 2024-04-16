import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ButtonPartner() {
  const [t] = useTranslation();
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavLink
      className='nav-link'
      id='button-partner'
      to='/become-a-partner'
      onClick={handleNavLinkClick}
    >
      <p>{t('get_involved.button')}</p>
    </NavLink>
  );
}
