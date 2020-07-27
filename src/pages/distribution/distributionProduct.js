import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
//images

import Arrow from '../../assets/images/abstract/arrow.svg';
import DotRect from '../../assets/images/abstract/dot-rectangle.svg';
import ConsultingPic from '../../assets/product image/consulltingPic.jpg';

import Productivity from '../../assets/images/productivity.svg';
import Chain from '../../assets/images/chain.svg';
import Industry from '../../assets/images/industry.svg';
import RelatedProduct from '../../components/relatedproducts/relatedProduct';
import RelatedBlogs from '../../components/relatedBlogs/relatedBlogs';

import Logo from '../../assets/images/caseStudies/first.png';

const ConsultingProduct = () => {
  return (
    <Fragment>
      <Navbar />
      {/* hero product display section  */}
      <section className='dp--hero'>
        {/* image and introduction part */}

        <section>
          <Container fluid className='dp--hero-container'>
            <Row>
              <Col className='dp--hero-text' xs={6} lg={7}>
                <h4>Sanitizer and Soap Dispensing Stand</h4>
                <p>
                  Kibog’s solutions and services help address the challenges
                  health, wellness and facility management organizations face
                  today - and shape how they’ll overcome the challenges of
                  tomorrow.
                </p>
                <Link to='/research' className='dp--cta-button'>
                  <button>Request A Quote</button>
                </Link>
              </Col>
              <Col className='dp--image-container' xs={6} lg={5}>
                {/* put image here */}
                <img src={DotRect} alt='' className='dp--product-image' />
                <figure className='dp--hero'>
                  <img src={ConsultingPic} />
                </figure>
              </Col>
            </Row>

            <img src={Arrow} alt='' className='arrow' />
          </Container>
        </section>
      </section>

      <section className='dp--detail-container'>
        <Container fluid className='dp--detail'>
          <Row>
            <Col className='dp--about' xs={6} lg={6}>
              <section>
                {' '}
                <h3 className='dp--about-title'>
                  Product <span style={{ fontWeight: 'lighter' }}>Details</span>{' '}
                </h3>
                <p>
                  Kibog helps companies with product registration and facility
                  licensing for the development of new products and maintaining
                  compliance to support existing productsand sites. This
                  includes the implementation of regulatory strategies, ensuring
                  timelypreparation, review and submission of documents to
                  Canadian and internationalregulatory authorities. In short,
                  Kibog can help with Health Canada license
                  applications,registrations and renewals.
                </p>
              </section>

              <section className='dp--specifications'>
                <h3>Specifications </h3>
                <article>
                  <ul className='dp--specifications-items'>
                    <li>
                      <div className='key'>Capacity (Metric) </div>
                      <div className='value'>KIBOG™ Hand</div>
                    </li>
                    <li>
                      <span className='key'>For Use With </span>
                      <span className='value'>1200 ml</span>
                    </li>
                    <li>
                      <span className='key'>Capacity (Metric) </span>
                      <span className='value'>1200 ml</span>
                    </li>
                    <li>
                      <span className='key'>Capacity (Metric) </span>
                      <span className='value'>1200 ml</span>
                    </li>
                  </ul>
                </article>
              </section>
            </Col>
            <Col className='dp--features' xs={6} lg={6}>
              <h3 className='dp--features-title'>
                Features{' '}
                <span style={{ fontWeight: 'lighter' }}> We offer </span>{' '}
              </h3>

              <ul className='dp--features-items'>
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
                  adipisicing elit. Qui excepturi.
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
                  adipisicing elit. Qui excepturi.
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
