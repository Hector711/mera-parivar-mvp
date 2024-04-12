import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className='card'>
      <div className='container-img-hover shadow'>
        <img src={props.img} alt={props.imgName} className='card-img shadow' />
        <div className='hover-card'>
          <p className='hover-label'>{props.label}</p>
          <p className='hover-card-text'>{props.hoverCardText}</p>
          <NavLink className='hover-card-link' to={props.link}>
          Link 
          </NavLink>
        </div>
      </div>
      <h2 className='card-header'>{props.header}</h2>
      <p className='card-text'>{props.cardText}</p>
    </div>
  );
}
