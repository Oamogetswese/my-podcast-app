import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navbar;