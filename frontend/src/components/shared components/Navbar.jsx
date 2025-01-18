import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">E-Commerce</Link>
      </div>
      <div>
        <Link to="/cart">Cart </Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
