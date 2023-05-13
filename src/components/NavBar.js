import React from 'react';
import './NavBar.css';


function Navbar() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/order">Order</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>

        
          <li><a href="/login">Login</a></li>

        </ul>
      </nav>
    );
  }

export default Navbar;