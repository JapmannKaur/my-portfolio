import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='nav-parent'>
      <div className="logo">
        <div className='l1'>JAPMANN</div>
        <div className='l2'>JAPMANN</div> 
      </div>
      <div className="navlinks">
        <li>
          <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='/blogs' className={location.pathname === '/blogs' ? 'active' : ''}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link> 
        </li>
      </div>
    </div>
  );
};

export default Navbar;
