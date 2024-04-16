import logo_svg from '@/assets/logo_svg.svg';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink className='nav-link' id='logo-container' to='/'>
      <img src={logo_svg} alt='Mera Parivar' id='logo' />
    </NavLink>
  );
}
