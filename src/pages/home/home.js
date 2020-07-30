import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import StickeyModel from '../../components/stickeyModal/StickeyModal';

//import images

import Hero from '../../assets/images/hero.svg';
import Consulting from '../../assets/images/consulting.svg';
import ConsultingSolution from '../../assets/images/ConsultingSolution.svg';
import Technology from '../../assets/images/technology.svg';
import Distribution from '../../assets/images/distribution.svg';

//whykibog icons
import Productivity from '../../assets/images/productivity.svg';
import Chain from '../../assets/images/chain.svg';
import Industry from '../../assets/images/industry.svg';

import Cicon from '../../assets/images/heroIcons/consult.svg';
import Ticon from '../../assets/images/heroIcons/technology.svg';
import Dicon from '../../assets/images/heroIcons/distribution.svg';

//testimonils

import Semicolon from '../../assets/images/semicolon.svg';
import Profile from '../../assets/images/profile1.jpg';

//company logo

import company1 from '../../assets/companyimages/uwacrest.png';

const Home = () => {
  return (
    <Fragment>
      <div className='headerWrapper'>
        <Navbar />

        <section className='hero'>
          {/* image and introduction part */}

          <section>
            <Container fluid className='hero--container'>
              <Row>
                <Col className='hero--container-text' xs={6} lg={7}>
                  <h3>
                    <strong style={{ color: '#0f4c81' }}>SOLUTIONS</strong> FOR
                    FACILITY MANAGEMENT & HEALTHCARE ORGANIZATIONS
                  </h3>
                  <p>
                    Kibog’s solutions and services help address the challenges
                    health, wellness and facility management organizations face
                    today - and shape how they’ll overcome the challenges of
                    tomorrow.
                  </p>
                  {/* <Link to='/research' className='navbar--list-link'>
                    <button>Go to my Research</button>
                  </Link> */}

                  <button>
                    <span>
                      <img src={Cicon} alt='' />
                    </span>{' '}
                    <span>Consulting</span>
                  </button>
                  <button>
                    <span>
                      <img src={Ticon} alt='' />
                    </span>{' '}
                    <span>Consulting</span>
                  </button>
                  <button>
                    <span>
                      <img src={Dicon} alt='' />
                    </span>{' '}
                    <span>Consulting</span>
                  </button>
                </Col>
                <Col className='hero--container-image' xs={6} lg={5}>
                  {/* put image here */}

                  <img src={Hero} />
                </Col>
              </Row>
            </Container>
          </section>
        </section>
      </div>

      {/* stickey section  */}

      <StickeyModel />

      {/* Body section starts from here */}

      <main className='homemain'>
        <section className='solution-wrapper'>
          <div className='solution'>
            <h4>
              <strong style={{ color: '#0f4c81' }}>SOLUTIONS</strong> FOR
              PHARMACY, HOSPITAL, MEDICAL & WELLNESS PRACTICE AND FACILITY
              MANAGEMENT
            </h4>
          </div>

          <Container fluid className='solution--consulting'>
            <Row style={{ margin: 0, padding: 0 }}>
              <Col className='solution--consulting-image' xs={5} lg={5}>
                <figure>
                  <img src={Consulting} alt='' />
                </figure>
              </Col>
              <Col className='solution--consulting-elements' xs={6} lg={6}>
                <h4>Consulting</h4>
                <article className='solution--description'>
                  <p>
                    The digital expectations of customers and citizens is
                    profoundly transforming how business is done. We work
                    alongside clients as trusted advisors, helping them navigate
                    the changes to become a digital.
                  </p>
                  <section className='solution--cardholder'>
                    {/* cards */}
                    <div className='solution--cards'>
                      <div className='solution--card-image'>
                        <img src={ConsultingSolution} alt='' />
                      </div>
                      <div className='solution--card-title'>
                        <h6>Our Business Consulting Solution </h6>
                      </div>
                    </div>
                  </section>
                </article>
              </Col>
            </Row>
          </Container>

          {/* technology section */}

          <Container fluid className='solution--consulting'>
            <Row
              style={{ margin: 0, padding: 0 }}
              className='justify-content-end'
            >
              <Col className='solution--consulting-elements' xs={6} lg={6}>
                <h4>Technology</h4>
                <article className='solution--description'>
                  <p>
                    Cloud-based SaaS solutions that help clients optimize
                    business processes and drive operational efficiencies.
                  </p>
                  <section className='solution--cardholder'>
                    {/* cards */}
                    <div className='solution--cards'>
                      <div className='solution--card-image'>
                        <img src={ConsultingSolution} alt='' />
                      </div>
                      <div className='solution--card-title'>
                        <h6>Product/Solution </h6>
                      </div>
                    </div>
                    {/* cards */}
                    <div className='solution--cards'>
                      <div className='solution--card-image'>
                        <img src={ConsultingSolution} alt='' />
                      </div>
                      <div className='solution--card-title'>
                        <h6>Services</h6>
                      </div>
                    </div>
                  </section>
                </article>
              </Col>
              <Col
                className='solution--consulting-image'
                xs={5}
                lg={5}
                style={{ textAlign: 'right' }}
              >
                <figure>
                  <img src={Technology} alt='' />
                </figure>
              </Col>
            </Row>
          </Container>

          {/* distribution section */}

          <Container fluid className='solution--consulting'>
            <Row style={{ margin: 0, padding: 0 }}>
              <Col className='solution--consulting-image' xs={5} lg={5}>
                <figure>
                  <img src={Distribution} alt='' />
                </figure>
              </Col>
              <Col className='solution--consulting-elements' xs={6} lg={6}>
                <h4>Distribution</h4>
                <article className='solution--description'>
                  <p>
                    The digital expectations of customers and citizens is
                    profoundly transforming how business is done. We work
                    alongside clients as trusted advisors, helping them navigate
                    the changes to become a digital.
                  </p>
                  <section className='solution--cardholder'>
                    {/* cards */}
                    <div className='solution--cards'>
                      <div className='solution--card-image'>
                        <img src={ConsultingSolution} alt='' />
                      </div>
                      <div className='solution--card-title'>
                        <h6>Medical Devices </h6>
                      </div>
                    </div>
                    {/* cards */}
                    <div className='solution--cards'>
                      <div className='solution--card-image'>
                        <img src={ConsultingSolution} alt='' />
                      </div>
                      <div className='solution--card-title'>
                        <h6>Supplies and Equipments</h6>
                      </div>
                    </div>
                  </section>
                </article>
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

        {/* //testimonial */}

        <section className='testimonial--wrapper'>
          <div className='testimonial--holder'>
            <h3>Testimonials</h3>

            <div className='card--holder'>
              <div className='testimonial--card'>
                <img src={Semicolon} alt='' className='semicolon' />
                <p className='testi-text'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren,
                </p>
                <div className='info'>
                  <figure>
                    <img src={Profile} alt='' />
                  </figure>
                  <h6>Saroj Kunwar</h6>
                  <p>CFO BIT</p>
                </div>
              </div>

              <div className='testimonial--card'>
                <img
                  src={Semicolon}
                  alt=''
                  className='semicolon'
                  style={{ color: 'green' }}
                />
                <p className='testi-text'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren,
                </p>
                <div className='info'>
                  <figure>
                    <img src={Profile} alt='' />
                  </figure>
                  <h6>Saroj Kunwar</h6>
                  <p>CFO BIT</p>
                </div>
              </div>

              <div className='testimonial--card'>
                <img src={Semicolon} alt='' className='semicolon' />
                <p className='testi-text'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren,
                </p>
                <div className='info'>
                  <figure>
                    <img src={Profile} alt='' />
                  </figure>
                  <h6>Saroj Kunwar</h6>
                  <p>CFO BIT</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* // Recent Blog Section  */}

        <section className='featuredblogs--wrapper'>
          <Container fluid className='featureblog--container'>
            <h3>
              Our Recent <strong style={{ color: '#0f4c81' }}>Blogs</strong>
            </h3>
            <Row className='justify-content-center'>
              <Col className='featureblog--card' xs={5} lg={3}>
                <div className='overlay--container'>
                  <figure>
                    {' '}
                    <img src={Profile} alt='' />
                  </figure>
                  <div className='overlay'></div>
                  <h6 className='featureblog--title'>
                    {' '}
                    Personal Protective Equipment (PPE) and Employee Safety –
                    What Organizations Need to Know.center
                  </h6>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. At vero eos et accusam et justo
                  duo dolores et ea rebum.
                </p>
                <h6>marlon</h6>
                <span className='blog--date'> 12/10/2020</span>
                <span className='blog--category'>Lifestyle</span>
              </Col>
              <Col className='featureblog--card' xs={5} lg={3}>
                <div className='overlay--container'>
                  <figure>
                    {' '}
                    <img src={Profile} alt='' />
                  </figure>
                  <div className='overlay'></div>
                  <h6 className='featureblog--title'>
                    {' '}
                    Personal Protective Equipment (PPE) and Employee Safety –
                    What Organizations Need to Know.center
                  </h6>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. At vero eos et accusam et justo
                  duo dolores et ea rebum.
                </p>
                <h6>marlon</h6>
                <span className='blog--date'> 12/10/2020</span>
                <span className='blog--category'>Lifestyle</span>
              </Col>
              <Col className='featureblog--card' xs={5} lg={3}>
                <div className='overlay--container'>
                  <figure>
                    {' '}
                    <img src={Profile} alt='' />
                  </figure>
                  <div className='overlay'></div>
                  <h6 className='featureblog--title'>
                    {' '}
                    Personal Protective Equipment (PPE) and Employee Safety –
                    What Organizations Need to Know.center
                  </h6>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. At vero eos et accusam et justo
                  duo dolores et ea rebum.
                </p>
                <h6>marlon</h6>
                <span className='blog--date'> 12/10/2020</span>
                <span className='blog--category'>Lifestyle</span>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='widget--container'>
          <div className='widget'>
            <div className='widget--title'>
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h4>
            </div>
            <button>Contact us</button>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
