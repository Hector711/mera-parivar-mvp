import { NavLink } from 'react-router-dom';
// const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

export default function CallToAction({ children, to }) {
  return (
    <NavLink className='nav-link' id='call-to-action' to={to}>
      <p class='bold'>{children}</p>
    </NavLink>
  );
}
