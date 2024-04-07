import React from 'react';

export default function Card(props) {
  return (
    <div className='card shadow'>
      <header className='card-header'>{props.header}</header>
      <img src={props.img} alt={props.imgName} className='card-img' />
    </div>
  );
}
