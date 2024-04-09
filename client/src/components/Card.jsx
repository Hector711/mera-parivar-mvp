import React from 'react';

export default function Card(props) {
  return (
    <div className='card '>
      <img src={props.img} alt={props.imgName} className='card-img shadow' />
      <h2 className='card-header'>{props.header}</h2>
      <p>{props.text}</p>
    </div>
  );
}
