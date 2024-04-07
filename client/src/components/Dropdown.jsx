import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';


export default function Dropdown(props) {
  const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

  return (
    <div id='dropdown'>
      <NavLink className={isActive} id='navLink' to={props.to}>
        <h4>
          {props.header}
          <IoIosArrowDown />
        </h4>
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
