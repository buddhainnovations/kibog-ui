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
          {/* <ul className='navbar--options'>
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
                Technology <i class='fa fa-angle-double-down'></i>
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
          </ul> */}

          <ul className='menu'>
            <li>
              <a href=''>Consulting</a>
            </li>
            <li>
              <a href='#'>Technology</a>
              <ul className='sub--menu'>
                <li>
                  <a href='#'>Product/Solution</a>

                  <ul className='supersub--menu'>
                    <li>
                      <a href='#'>EZ BOOK</a>
                    </li>
                    <li>
                      <a href='#'>IOT Device</a>
                    </li>
                    <li>
                      <a href='#'>Random tech</a>
                    </li>
                    <li>
                      <a href='#'>Sajilo Kitab</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#'>Services</a>
                  <ul className='supersub--menu'>
                    <li>
                      <a href='#'>website</a>
                    </li>
                    <li>
                      <a href='#'>pptt</a>
                    </li>
                    <li>
                      <a href='#'>fsadfsa</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Distribution</a>
            </li>
            <li>
              <a href=''>About Kibog</a>
            </li>
            <li>
              <a href=''>Resources</a>
            </li>
            <li>
              <a href=''>Resources</a>
            </li>
          </ul>
        </nav>
        login
      </header>
    </Fragment>
  );
};

export default Navbar;
