import { NavLink } from 'react-router-dom';

export default function ButtonPartner() {
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavLink className='nav-link' id='button-partner' to='/getinvolved' onClick={handleNavLinkClick}>
      <p className='bold'>BECOME A PARTNER</p>
    </NavLink>
  );
}
