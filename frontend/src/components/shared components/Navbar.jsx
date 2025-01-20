import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
     <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
