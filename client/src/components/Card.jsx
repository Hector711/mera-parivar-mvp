import React from 'react';
import { NavLink } from 'react-router-dom';
import Label from './Label'

export default function Card(props) {
  return (
    <div className='card'>
      <div className='container-img-hover shadow'>
        <img src={props.img} alt={props.imgName} className='card-img' />
        <div className='hover-card'>
          <Label color={props.color}>{props.label}</Label>
          {/* <p className='hover-label'></p> */}
          <p className='hover-card-text'>{props.hoverCardText}</p>
          <NavLink className='hover-card-link' to={props.link}>
            Read More
          </NavLink>
        </div>
      </div>
      <h2 className='card-header'>{props.header}</h2>
      <p className='card-text'>{props.cardText}</p>
    </div>
  );
}
