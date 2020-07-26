import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
//images

import Arrow from '../../assets/images/abstract/arrow.svg';
import DotRect from '../../assets/images/abstract/dot-rectangle.svg';
import TechnologyPic from '../../assets/product image/technologyPic.png';

import Productivity from '../../assets/images/productivity.svg';
import Chain from '../../assets/images/chain.svg';
import Industry from '../../assets/images/industry.svg';
import RelatedProduct from '../../components/relatedproducts/relatedProduct';
import RelatedBlogs from '../../components/relatedBlogs/relatedBlogs';

import Logo from '../../assets/images/caseStudies/first.png';
import ApplicationAreaIcon1 from '../../assets/images/hospital.svg';

const ConsultingProduct = () => {
  return (
    <Fragment>
      <Navbar />
      {/* hero product display section  */}
      <section className='tp--hero'>
        {/* image and introduction part */}

        <section>
          <Container fluid className='tp--hero-container'>
            <Row>
              <Col className='tp--hero-text' xs={6} lg={7}>
                <h3>
                  EZBook - Space, Facility, Asset & Resource Booking made easy!{' '}
                </h3>
                <p>
                  EZBook makes it easy to schedule and manage utilization of
                  Spaces, Facilities, Physical Assets & Resources, Vehicles,
                  Equipments, Workspaces… and more.
                </p>
                <Link to='/research' className='tp--cta-button'>
                  <button>Request A Quote</button>
                </Link>
              </Col>
              <Col className='tp--image-container' xs={6} lg={5}>
                {/* put image here */}
                <img src={DotRect} alt='' className='tp--product-image' />
                <figure className='tp--hero'>
                  <img src={TechnologyPic} />
                </figure>
              </Col>
            </Row>

            <img src={Arrow} alt='' className='arrow' />
          </Container>
        </section>
      </section>

      <section className='tp--benefit-wrapper'>
        <h3>Benefits </h3>
        <Container fluid className='tp--benefit-container'>
          {/* Card sections */}
          <Row className='tp--benefit'>
            {/* cards  */}
            <Col className='tp--benefit-card' lg={4}>
              <figure>
                <img src={Productivity} alt='' />
              </figure>
              <h5>Improve Productivity</h5>
              <p>
                We help you leverage technology to drive efficiency and stay
                ahead in this digital world.
              </p>
            </Col>
            <Col className='tp--benefit-card' lg={4}>
              <figure>
                <img src={Chain} alt='' />
              </figure>
              <h5>Managed Supply Chain Risks</h5>
              <p>
                Consistent and reliable supply chain is critical to the smooth
                operation of your business and we provide that
              </p>
            </Col>
            <Col className='tp--benefit-card' lg={4}>
              <figure>
                <img src={Industry} alt='' />
              </figure>
              <h5>Improve Productivity</h5>
              <p>
                Our offerings are based on the feedback received from our
                clients and are tailored to the health and wellness industry
              </p>
            </Col>
            <Col className='tp--benefit-card' lg={4}>
              <figure>
                <img src={Industry} alt='' />
              </figure>
              <h5>Improve Productivity</h5>
              <p>
                Our offerings are based on the feedback received from our
                clients and are tailored to the health and wellness industry
              </p>
            </Col>
            <Col className='tp--benefit-card' lg={4}>
              <figure>
                <img src={Industry} alt='' />
              </figure>
              <h5>Improve Productivity</h5>
              <p>
                Our offerings are based on the feedback received from our
                clients and are tailored to the health and wellness industry
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* //features and application areas */}

      <section className='tp--detail-container'>
        <Container fluid className='tp--detail'>
          <Row>
            <Col className='tp--services' xs={6} lg={6}>
              <h3 className='tp--services-title'>Features </h3>

              <ul className='tp--services-items'>
                <li>
                  <i class='fa fa-check'></i>Easy to Use
                </li>
                <li>
                  <i class='fa fa-check'></i>Manage Availability & Utilization
                </li>
                <li>
                  <i class='fa fa-check'></i>Easy to Use
                </li>
                <li>
                  <i class='fa fa-check'></i>Easy to Use
                </li>
              </ul>
            </Col>

            <Col className='tp--about' xs={6} lg={6}>
              <h3 className='tp--about-title'>
                Application{' '}
                <span style={{ fontWeight: 'lighter' }}> Areas</span>{' '}
              </h3>
              <Container className='tp--about-application'>
                <Row>
                  <Col className='tp--about-items' lg={3}>
                    <figure>
                      <img src={ApplicationAreaIcon1} alt='Trulli' />
                      <figcaption>Hospital</figcaption>
                    </figure>
                  </Col>
                  <Col className='tp--about-items' lg={3}>
                    <figure>
                      <img src={ApplicationAreaIcon1} alt='Trulli' />
                      <figcaption>Hospital</figcaption>
                    </figure>
                  </Col>
                  <Col className='tp--about-items' lg={3}>
                    <figure>
                      <img src={ApplicationAreaIcon1} alt='Trulli' />
                      <figcaption>Hospital</figcaption>
                    </figure>
                  </Col>
                  <Col className='tp--about-items' lg={3}>
                    <figure>
                      <img src={ApplicationAreaIcon1} alt='Trulli' />
                      <figcaption>Hospital</figcaption>
                    </figure>
                  </Col>
                  <Col className='tp--about-items' lg={3}>
                    <figure>
                      <img src={ApplicationAreaIcon1} alt='Trulli' />
                      <figcaption>Hospital</figcaption>
                    </figure>
                  </Col>
                  <Col className='tp--about-items' lg={3}>
                    <figure>
                      <img src={ApplicationAreaIcon1} alt='Trulli' />
                      <figcaption>Hospital</figcaption>
                    </figure>
                  </Col>
                  <Col className='tp--about-items' lg={3}>
                    <figure>
                      <img src={ApplicationAreaIcon1} alt='Trulli' />
                      <figcaption>Hospital</figcaption>
                    </figure>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>

      {/* related produc */}

      <RelatedProduct />

      {/* related blogs */}

      <RelatedBlogs />

      {/* {
        // related case studies


      } */}

      <section>
        <section className='case--wrapper'>
          <h3>
            Case <span style={{ fontWeight: 'lighter' }}>Studies</span>{' '}
          </h3>
          <Container fluid className='case'>
            <Row style={{ justifyContent: 'flex-end' }}>
              <Col className='case--container' lg={3}>
                <figure>
                  <img src={Logo} alt='' />
                </figure>

                <h5>
                  This is sample Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Qui excepturi .
                </h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus corporis tempora esse non, voluptas sapiente velit quae
                  officiis harum soluta pariatur vel ullam quasi! Dolore nemo
                  dicta dolorum tempora incidunt.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus corporis tempora esse non, voluptas sapiente velit quae
                  officiis harum soluta pariatur vel ullam quasi! Dolore nemo
                  dicta dolorum tempora incidunt.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus corporis tempora esse non, voluptas sapiente velit quae
                  officiis harum soluta pariatur vel ullam quasi! Dolore nemo
                  dicta dolorum tempora incidunt.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </Fragment>
  );
};

export default ConsultingProduct;
