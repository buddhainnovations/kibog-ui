import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

//import components
import Navbar from '../../components/navbar/navbar';

//images

import TechCategory from '../../assets/product image//productimage.jpg';
import HeroTech from '../../assets/images/hero-dist.gif';

const RelatedProduct = () => {
  return (
    <Fragment>
      <Navbar />
      <section>
        <section className='heroDist'>
          {/* image and introduction part */}

          <section>
            <Container fluid className='heroDist--container'>
              <Row>
                <Col className='heroDist--container-text' xs={6} lg={7}>
                  <h3>
                    <strong style={{ color: '#0f4c81' }}>SOLUTIONS</strong> FOR
                    DISTRIBUTION AND HEALTH SUPPLIES
                  </h3>
                  <p>
                    Kibog’s solutions and services help address the challenges
                    health, wellness and facility management organizations face
                    today - and shape how they’ll overcome the challenges of
                    tomorrow.
                  </p>
                  <Link to='/research' className='navbar--list-link'>
                    <button>Request a quote </button>
                  </Link>
                </Col>
                <Col className='heroDist--container-image' xs={6} lg={5}>
                  {/* put image here */}

                  <img src={HeroTech} />
                </Col>
              </Row>
            </Container>
          </section>
        </section>
      </section>

      <main className='heroDist--case-wrapper'>
        <h3>
          Categories for{' '}
          <strong style={{ color: '#0F4C81' }}>Distribution Solutions</strong>{' '}
        </h3>
        <Container fluid className='heroDist--case'>
          <Row style={{ justifyContent: 'space-between' }}>
            <Col className='heroDist--case-container' lg={6}>
              <figure>
                <img src={TechCategory} alt='' />
              </figure>

              <h5>Medical Devices</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Minus--
                corporis tempora esse non, voluptas sapiente velit quae officiis
                harum soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Minus-- corporis tempora esse non, voluptas
                sapiente velit quae officiis harum soluta pariatur vel ullam
                quasi! Dolore nemo dicta dolorum tempora incidunt. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Minus-- corporis
                tempora esse non, voluptas sapiente velit quae officiis harum
                soluta pariatur vel ullam quasi! Dolore nemo dicta dolorum
                tempora incidunt.
              </p>
            </Col>
            <Col className='heroDist--case-container' lg={6}>
              <figure>
                <img src={TechCategory} alt='' />
              </figure>

              <h5>Supplies and Equipmenta</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Minus-- corporis tempora esse non, voluptas sapiente velit quae
                officiis harum soluta pariatur vel ullam quasi! Dolore nemo
                dicta dolorum tempora incidunt. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Minus-- corporis tempora esse non,
                voluptas sapiente velit quae officiis harum soluta pariatur vel
                ullam quasi! Dolore nemo dicta dolorum tempora incidunt.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
};

export default RelatedProduct;
