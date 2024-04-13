import { NavLink } from 'react-router-dom';

export default function ButtonDonate() {
  return (
    <NavLink className='nav-link' id='button-donate' to='/donate'>
      <p className='bold'>DONATE</p>
    </NavLink>
  );
}
