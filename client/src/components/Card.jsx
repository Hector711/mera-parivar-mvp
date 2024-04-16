import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Label from './Label'

export default function Card(props) {
  const [t] = useTranslation();

  return (
    <div className='card'>
      <div className='container-img-hover shadow'>
        <img src={props.img} alt={props.imgName} className='card-img' />
        <div className='hover-card'>
          <Label color={props.color}>{props.label}</Label>
          <p className='hover-card-text'>{props.hoverCardText}</p>
          <NavLink className='hover-card-link' to={props.link}>
            {t('cards.read_more')}
          </NavLink>
        </div>
      </div>
      <h2 className='card-header'>{props.header}</h2>
      <p className='card-text'>{props.cardText}</p>
    </div>
  );
}
