import { NavLink } from 'react-router-dom';

export default function ButtonDonate(props) {
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavLink className='nav-link' id='button-donate' onClick={handleNavLinkClick} to='/donate'>
      <p className='bold'>DONATE{props ? props.children : ''}</p>
    </NavLink>
  );
}
