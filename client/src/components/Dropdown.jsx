import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;
export default function Dropdown(props) {
  return (
    <div id='dropdown'>
      <NavLink className='{isActive} nav-link' to={props.to}>
        <p className='bold'>{props.header}</p>
        <IoIosArrowDown />
      </NavLink>

      <div id='dd_content'>
        <ul className='dd_ul'>
          {props.pages.map(({ header, link }) => (
            <li className='dd_li' key={header}>
              <NavLink to={link} className='dd_anchor'>
                {header}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
