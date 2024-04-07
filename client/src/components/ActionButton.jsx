import { NavLink } from 'react-router-dom'

export default function ActionButton({children}) {
  return (
    <NavLink id='navLink' className='action-button' to='/donate'>
          <h4>{children}</h4>
    </NavLink>
  )
}
