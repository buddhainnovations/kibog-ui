import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
//images

import EZSupport from '../../assets/images/caseStudies/first.png';

const Support = () => {
  return (
    <Fragment>
      <Navbar />

      <section className='support--hero'>
        <div className='support--hero--content'>
          <h1>How can we help you?</h1>

          <button>Contact Us</button>
        </div>
      </section>

      <section className='guide'>
        <h6>
          We have provided some resources below to help you get started and
          manage your site. If you need additional help, feel free to contact
          us.
        </h6>

        <Container fluid>
          <Row className='guide--row'>
            <Col className='guide--card' lg={6}>
              <figure>
                <img src={EZSupport} alt='' />
              </figure>
              <ul className='guide--list'>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>
                    Introduction to Kibog
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>Kibog Configuration
                    Guide
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>Kibog User Guide
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>Kibog Email Parser
                    Configuration and User Guide
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>Kibog Customer
                    Portal User Guide
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>Kibog Release Notes,
                    April 14 2019
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>Kibog Release Notes,
                    August 11, 2019
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>Kibog Release Notes,
                    September 1, 2019
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>Kibog Release Notes,
                    September 22, 2019
                  </a>
                </li>
              </ul>
            </Col>
            <Col className='guide--card' lg={6}>
              <figure>
                <img src={EZSupport} alt='' />
              </figure>
              <ul className='guide--list'>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>
                    Introduction to ezbook
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> ezbook user guide
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>ezbook Site
                    Configuration Procedure
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>ezbook Configuration
                    Worksheet
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>ezbook
                    administrator’s guide
                  </a>
                </li>
                <li>
                  {' '}
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i>ezbook – Frequently
                    Asked Questions
                  </a>
                </li>
              </ul>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Support;
