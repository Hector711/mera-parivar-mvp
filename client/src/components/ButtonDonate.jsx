import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ButtonDonate(props) {
  const [t] = useTranslation();

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavLink
      className='nav-link'
      id='button-donate'
      onClick={handleNavLinkClick}
      to='/donate'
    >
      <p className='bold'>
        {t()}
        {t('donate.header')}
        {props ? props.children : ''}
      </p>
    </NavLink>
  );
}
