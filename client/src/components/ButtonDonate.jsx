import { NavLink } from 'react-router-dom';

export default function ButtonDonate(props) {
  return (
    <NavLink className='nav-link' id='button-donate' to='/donate'>
      <p className='bold'>DONATE{props ? props.children : ''}</p>
    </NavLink>
  );
}
