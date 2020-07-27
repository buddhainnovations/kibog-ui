import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
import RelatedProduct from '../../components/relatedproducts/relatedProduct';
import RelatedBlogs from '../../components/relatedBlogs/relatedBlogs';
//images

import Arrow from '../../assets/images/abstract/arrow.svg';
import DotRect from '../../assets/images/abstract/dot-rectangle.svg';
import TechnologyPic from '../../assets/product image/technologyPic.png';

import Logo from '../../assets/images/caseStudies/first.png';
import Problem from '../../assets/images/problem.svg';
import Solution from '../../assets/images/solution.svg';

const CaseProduct = () => {
  return (
    <Fragment>
      <Navbar />
      {/* hero product display section  */}
      <section className='case--hero'>
        {/* image and introduction part */}

        <section>
          <Container fluid className='case--hero-container'>
            <Row>
              <Col className='case--hero-text' xs={6} lg={7}>
                <h3>
                  EZBook - Space, Facility, Asset & Resource Booking made easy!{' '}
                </h3>
                <p>
                  EZBook makes it easy to schedule and manage utilization of
                  Spaces, Facilities, Physical Assets & Resources, Vehicles,
                  Equipments, Workspaces… and more.
                </p>
                <Link to='/research' className='case--cta-button'>
                  <button>Request A Quote</button>
                </Link>
              </Col>
              <Col className='case--image-container' xs={6} lg={5}>
                {/* put image here */}
                <img src={DotRect} alt='' className='case--product-image' />
                <figure className='case--hero'>
                  <img src={TechnologyPic} />
                </figure>
              </Col>
            </Row>

            <img src={Arrow} alt='' className='arrow' />
          </Container>
        </section>
      </section>

      <section className='client'>
        <h3>Client</h3>
        <figure className='client-logo'>
          <img src={Logo} alt='' />
          <figcaption>Worldlink communications private limited</figcaption>
        </figure>
      </section>

      {/* //problem and solutions areas */}

      <section className='casep--detail-container'>
        <Container fluid className='casep--detail'>
          <Row>
            <Col className='casep--services' xs={6} lg={6}>
              <h3 className='casep--services-title'>Problems </h3>

              <ul className='casep--services-items'>
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

            <Col className='casep--about' xs={6} lg={6}>
              <figure>
                <img src={Problem} alt='' />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='casep--detail-container'>
        <Container fluid className='casep--detail'>
          <Row>
            <Col className='casep--about' xs={6} lg={6}>
              <figure>
                <img src={Solution} alt='' />
              </figure>
            </Col>

            <Col className='casep--services' xs={6} lg={6}>
              <h3 className='casep--services-title'>Solutions </h3>

              <ul className='casep--services-items'>
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

      <section className='outcome'>
        <h3>Outcomes</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          voluptatibus quibusdam. Rem adipisci excepturi tenetur eum nulla.
          Excepturi, velit fugit ea perferendis vel voluptatum laudantium
          quisquam esse nihil sunt ullam.
        </p>
      </section>
    </Fragment>
  );
};

export default CaseProduct;
