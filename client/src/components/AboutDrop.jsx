import { IoIosArrowDown } from 'react-icons/io';

export default function AboutDrop(props) {
  
  return (
    <div id='dropdown' className={props.className}>
      <a href='#' className='dd_head' title='.'>
        <h4>{props.header}
        <IoIosArrowDown />
        </h4>
        {/* <input type='checkbox' className='dd_check' title='.' /> */}
      </a>

      <div id='dd_content'>
        <ul className='dd_ul'>
          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Our Mission
            </a>
          </li>

          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Our Team
            </a>
          </li>

          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Our Events
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
