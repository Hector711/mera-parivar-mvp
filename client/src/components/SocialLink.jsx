import React from 'react';

export default function SocialLink({ children, link }) {
  return (
    <a href={link} className='social-links'>
      {children}
    </a>
  );
}
