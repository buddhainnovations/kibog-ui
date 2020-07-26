import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

//company logo import
import Logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <Fragment>
      <header className='mainNavbar'>
        <div className='kibogLogo'>
          <Link to='/' className='navbar--list-link'>
            <img
              src={Logo}
              alt='Kibog solu'
              title='Logo'
              style={{ width: '150px', padding: '20px 0px' }}
            />
          </Link>
        </div>
        <nav className='navbarBox'>
          <ul className='navbar--options'>
            <li className='navbar--list'>
              <NavLink to='/consulting' className='navbar--list-link'>
                Consulting
              </NavLink>
            </li>
            <li className='navbar--list'>
              <NavLink
                to='/technology'
                activeClassName='active'
                className='navbar--list-link'
              >
                Technology
              </NavLink>
            </li>
            <li className='navbar--list'>
              <NavLink
                to='/distribution'
                activeClassName='active'
                className='navbar--list-link'
              >
                Distribution
              </NavLink>
            </li>
            <li className='navbar--list'>
              <NavLink
                to='/consultp'
                activeClassName='active'
                className='navbar--list-link'
              >
                Resources
              </NavLink>
            </li>
            <li className='navbar--list'>
              <NavLink
                to='/techp'
                activeClassName='active'
                className='navbar--list-link'
              >
                About Kibog
              </NavLink>
            </li>
            <li className='navbar--list'>
              <NavLink
                to='/distp'
                activeClassName='active'
                className='navbar--list-link'
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        login
      </header>
    </Fragment>
  );
};

export default Navbar;
