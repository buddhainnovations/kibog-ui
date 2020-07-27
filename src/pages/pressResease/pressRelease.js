import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
//images

import Logo from '../../assets/images/caseStudies/first.png';

const PressRelease = () => {
  return (
    <Fragment>
      <Navbar />

      <section className='press--wrapper'>
        <h3>
          Press <span style={{ fontWeight: 'lighter' }}>Release</span>{' '}
        </h3>
        <Container fluid className='press'>
          <Row style={{ justifyContent: 'space-between' }}>
            <Col className='press--container' lg={4}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
              <button>Read More</button>
            </Col>
            <Col className='press--container' lg={4}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
              <button>Read More</button>
            </Col>
            <Col className='press--container' lg={4}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
              <button>Read More</button>
            </Col>
            <Col className='press--container' lg={4}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
              <button>Read More</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default PressRelease;
