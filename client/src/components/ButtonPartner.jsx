import { NavLink } from 'react-router-dom';

export default function ButtonPartner() {
  return (
    <NavLink className='nav-link' id='button-partner' to='/donate'>
      <p className='bold'>BECOME A PARTNER</p>
    </NavLink>
  );
}
