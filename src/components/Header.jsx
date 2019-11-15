import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
 return (
  <nav>
   <div className="nav-content">
    <a href="#" className="brand-logo">Beer Tracker</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
     <li><Link to="/">Login</Link></li>
    </ul>
   </div>
  </nav>
 );
}

export default Header;