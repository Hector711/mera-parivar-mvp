import logo_svg from '@/assets/logo_svg.svg';
import { NavLink } from 'react-router-dom';

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

export default function Logo() {
  return (
    <NavLink className='{isActive} nav-link' id='logo-container' to='/'>
      <img src={logo_svg} alt='Mera Parivar' id='logo' />
    </NavLink>
  );
}
