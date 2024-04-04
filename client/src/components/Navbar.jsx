import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/donations">Donations</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
    </nav>
  );
}
