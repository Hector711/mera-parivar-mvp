import React from 'react'

export default function Label(props) {
  return (
    <div id='label' className={props.color}>
      <p>{props.children}</p>
    </div>
  )
}
