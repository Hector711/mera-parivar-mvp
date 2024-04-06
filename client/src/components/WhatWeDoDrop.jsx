import { IoIosArrowDown } from 'react-icons/io';

export default function WhatWeDoDrop(props) {
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
              Education for children
            </a>
          </li>

          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Youth vocational & skills training
            </a>
          </li>

          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Girl child education
            </a>
          </li>
          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Advocacy & Community Assistance
            </a>
          </li>
          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Anti Human Traffic
            </a>
          </li>
          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Women Empowernment
            </a>
          </li>
          <li className='dd_li'>
            <a href='#' className='dd_anchor'>
              Swabhiman Project
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
