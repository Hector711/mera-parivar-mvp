import React from 'react';

export default function Card(props) {
  return (
    <div className='card shadow'>
      <img src={props.img} alt={props.imgName} className='card-img' />
      <h2 className='card-header'>{props.header}</h2>
      <p>{props.text}</p>
    </div>
  );
}
