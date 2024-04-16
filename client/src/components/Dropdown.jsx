import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export default function Dropdown(props) {
  return (
    <div id='dropdown'>
      <NavLink className='nav-link' to={props.to}>
        <p>{props.header}</p>
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
