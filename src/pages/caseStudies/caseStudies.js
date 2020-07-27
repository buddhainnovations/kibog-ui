import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
//images

import Logo from '../../assets/images/caseStudies/first.png';

const CaseStudies = () => {
  return (
    <Fragment>
      <Navbar />

      <section className='case--wrapper'>
        <h3>
          Case <span style={{ fontWeight: 'lighter' }}>Studies</span>{' '}
        </h3>
        <Container fluid className='case'>
          <Row style={{ justifyContent: 'space-evenly' }}>
            <Col className='case--container' lg={3}>
              <figure>
                <img src={Logo} alt='' />
              </figure>

              <h5>
                This is sample Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui excepturi .
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
            </Col>
            <Col className='case--container' lg={3}>
              <figure>
                <img src={Logo} alt='' />
              </figure>

              <h5>
                This is sample Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui excepturi .
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
            </Col>
            <Col className='case--container' lg={3}>
              <figure>
                <img src={Logo} alt='' />
              </figure>

              <h5>
                This is sample Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui excepturi .
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
            </Col>
            <Col className='case--container' lg={3}>
              <figure>
                <img src={Logo} alt='' />
              </figure>

              <h5>
                This is sample Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui excepturi .
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
            </Col>
            <Col className='case--container' lg={3}>
              <figure>
                <img src={Logo} alt='' />
              </figure>

              <h5>
                This is sample Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui excepturi .
              </h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CaseStudies;
