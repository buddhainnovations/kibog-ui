import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
import Profile2 from '../../assets/images/profile2.jpg';

//images
import Partner from '../../assets/companyimages/uwacrest.png';
import AboutUs from '../../assets/images/aboutus-hero.svg';

//whykibog icons
import Productivity from '../../assets/images/productivity.svg';
import Chain from '../../assets/images/chain.svg';
import Industry from '../../assets/images/industry.svg';

//company logo

import company1 from '../../assets/companyimages/uwacrest.png';

const Blogs = () => {
  return (
    <Fragment>
      <Navbar />

      <main className='about--main'>
        <section className='about--hero'>
          <Container fluid className='hero--container'>
            <Row>
              <Col className='hero--desc'>
                <h3>About Company</h3>
                <p>
                  Kibog is the name of our product/platform and Kibog Inc. is
                  the name of our company. We are based out of Canada, eh!, and
                  our vision is to help companies better manage the health,
                  performance and utilization of their physical assets; fixed
                  and mobile. We also own and operate www.SensorOutlet.com
                  website. We are always looking for ways to help our customers
                  and take care of their problems and pain points. As such, we
                  list our pre-packaged solutions on www.SensorOutlet.com to
                  generate awareness and make it easily accessible to customers.
                  We’re big believers in the power of keeping it simple and it
                  reflects in the products & services we provide, and the
                  feedback we have received from our clients. We will continue
                  to focus on simplicity, clarity, ease-of-use, and maintaining
                  a personal touch with our clients.
                </p>
              </Col>
              <Col className='hero--image'>
                {' '}
                <figure>
                  <img src={AboutUs} alt='' />
                </figure>
              </Col>
            </Row>
          </Container>
        </section>

        {/* //missionn vision section  */}

        <section className='missionVision'>
          <Container className='missionVision--container' fluid>
            <Row>
              <Col className='missionVision--mission'>
                <h3>Mission</h3>
                <p>
                  4 Kibog is the name of our product/platform and Kibog Inc. is
                  the name of our company. We are based out of Canada, eh!, and
                  our vision is to help companies better manage the health,
                  performance and utilization of their physical assets; fixed
                  and mobile. We also own and operate www.SensorOutlet.com
                  website. We are always looking for ways to help our customers
                  and take care of their problems and pain points. As such, we
                  list our pre-packaged solutions on www.SensorOutlet.com to
                  generate awareness and make it easily accessible to customers.
                  We’re big believers in the power of keeping it simple and it
                  reflects in the products & services we provide, and the
                  feedback we have received from our clients. We will continue
                  to focus on simplicity, clarity, ease-of-use, and maintaining
                  a personal touch with our clients.
                </p>
              </Col>
              <Col className='missionVision--mission'>
                <h3>Vision</h3>
                <p>
                  4 Kibog is the name of our product/platform and Kibog Inc. is
                  the name of our company. We are based out of Canada, eh!, and
                  our vision is to help companies better manage the health,
                  performance and utilization of their physical assets; fixed
                  and mobile. We also own and operate www.SensorOutlet.com
                  website. We are always looking for ways to help our customers
                  and take care of their problems and pain points. As such, we
                  list our pre-packaged solutions on www.SensorOutlet.com to
                  generate awareness and make it easily accessible to customers.
                  We’re big believers in the power of keeping it simple and it
                  reflects in the products & services we provide, and the
                  feedback we have received from our clients. We will continue
                  to focus on simplicity, clarity, ease-of-use, and maintaining
                  a personal touch with our clients.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* partners section  */}

        <section className='partners'>
          <h3>Our Partners</h3>
          <Container fluid>
            <Row className='partners--container'>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
              <Col className='partners--card' lg={1}>
                <figure>
                  <img src={Partner} alt='' />
                </figure>
              </Col>
            </Row>
          </Container>
        </section>

        {/* why kibog section  */}

        <section className='whykibog--wrapper'>
          <div className='whykibog'>
            <h3>
              Why <strong style={{ color: '#0f4c81' }}>Kibog?</strong>
            </h3>
            {/* Card sections */}
            <div className='whykibog--cardholder'>
              {/* cards  */}
              <div className='whykibog--card'>
                <figure>
                  <img src={Productivity} alt='' />
                </figure>
                <h5>Improve Productivity</h5>
                <p>
                  We help you leverage technology to drive efficiency and stay
                  ahead in this digital world.
                </p>
              </div>
              <div className='whykibog--card'>
                <figure>
                  <img src={Chain} alt='' />
                </figure>
                <h5>Managed Supply Chain Risks</h5>
                <p>
                  Consistent and reliable supply chain is critical to the smooth
                  operation of your business and we provide that through our
                  network of suppliers spread across geographies
                </p>
              </div>
              <div className='whykibog--card'>
                <figure>
                  <img src={Industry} alt='' />
                </figure>
                <h5>Improve Productivity</h5>
                <p>
                  Our offerings are based on the feedback received from our
                  clients and are tailored to the health and wellness industry
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company structure section  */}

        <section className='structure--wrapper'>
          <h3> Company Structure</h3>

          <Container className='structure' fluid>
            <Row style={{ justifyContent: 'center' }}>
              <Col className='structure--card' lg={2}>
                <figure>
                  <img src={Profile2} alt='' />
                </figure>

                <h5>Sujan Nepali</h5>
                <p>Salesman</p>
              </Col>

              <Col className='structure--card' lg={2}>
                <figure>
                  <img src={Profile2} alt='' />
                </figure>

                <h5>Sujan Nepali</h5>
                <p>Salesman</p>
              </Col>

              <Col className='structure--card' lg={2}>
                <figure>
                  <img src={Profile2} alt='' />
                </figure>

                <h5>Sujan Nepali</h5>
                <p>Salesman</p>
              </Col>

              <Col className='structure--card' lg={2}>
                <figure>
                  <img src={Profile2} alt='' />
                </figure>

                <h5>Sujan Nepali</h5>
                <p>Salesman</p>
              </Col>

              <Col className='structure--card' lg={2}>
                <figure>
                  <img src={Profile2} alt='' />
                </figure>

                <h5>Sujan Nepali</h5>
                <p>Salesman</p>
              </Col>

              <Col className='structure--card' lg={2}>
                <figure>
                  <img src={Profile2} alt='' />
                </figure>

                <h5>Sujan Nepali</h5>
                <p>Salesman</p>
              </Col>

              <Col className='structure--card' lg={2}>
                <figure>
                  <img src={Profile2} alt='' />
                </figure>

                <h5>Sujan Nepali</h5>
                <p>Salesman</p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* good company part  */}

        <section className='goodcompany'>
          <h3 className='featureblog--title'>
            You are in a{' '}
            <strong style={{ color: '#0f4c81' }}>Good Company</strong>
          </h3>

          <div className='company--holder'>
            <div className='row--upper'>
              <figure>
                <img src={company1} alt='' />
              </figure>
              <figure>
                <img src={company1} alt='' />
              </figure>
              <figure>
                <img src={company1} alt='' />
              </figure>
              <figure>
                <img src={company1} alt='' />
              </figure>
              <figure>
                <img src={company1} alt='' />
              </figure>
            </div>
            {/* lower row  */}
            <div className='row--upper'>
              <figure>
                <img src={company1} alt='' />
              </figure>
              <figure>
                <img src={company1} alt='' />
              </figure>
              <figure>
                <img src={company1} alt='' />
              </figure>
              <figure>
                <img src={company1} alt='' />
              </figure>
              <figure>
                <img src={company1} alt='' />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Blogs;
