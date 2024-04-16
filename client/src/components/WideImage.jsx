import React from 'react';

export default function WideImage(props) {
  return (
    <div className='w-[100%] h-[264px] img-wide' id='wide-container'>
      <img src={props.img} id='img_wide' alt={props.alt} />
      <div id='text-wide'>{props.children}</div>
    </div>
  );
}
