import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <nav className=''>
          <Link to = "/">Home</Link>
          <Link to = "/review">Order Review</Link>
          <Link to = "/about">about</Link>
          <Link to = "/contract">Contract</Link>
        </nav>
    );
};

export default Header;