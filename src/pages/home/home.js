import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

//import images
import Logo from '../../assets/images/logo.png';
import Hero from '../../assets/images/hero.svg';
import Consulting from '../../assets/images/consulting.svg';
import ConsultingSolution from '../../assets/images/ConsultingSolution.svg';
import Technology from '../../assets/images/technology.svg';
import Distribution from '../../assets/images/distribution.svg';

const Home = () => {
  return (
    <Fragment>
      <div className='headerWrapper'>
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
            <ul className='navbar--options'>
              <li className='navbar--list'>
                <NavLink to='/' className='navbar--list-link'>
                  Consulting
                </NavLink>
              </li>
              <li className='navbar--list'>
                <NavLink
                  to='/research'
                  activeClassName='active'
                  className='navbar--list-link'
                >
                  Technology
                </NavLink>
              </li>
              <li className='navbar--list'>
                <NavLink
                  to='/teaching'
                  activeClassName='active'
                  className='navbar--list-link'
                >
                  Distribution
                </NavLink>
              </li>
              <li className='navbar--list'>
                <NavLink
                  to='/conference'
                  activeClassName='active'
                  className='navbar--list-link'
                >
                  Resources
                </NavLink>
              </li>
              <li className='navbar--list'>
                <NavLink
                  to='/conference'
                  activeClassName='active'
                  className='navbar--list-link'
                >
                  About Kibog
                </NavLink>
              </li>
              <li className='navbar--list'>
                <NavLink
                  to='/conference'
                  activeClassName='active'
                  className='navbar--list-link'
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          login
        </header>

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
                  <Link to='/research' className='navbar--list-link'>
                    <button>Go to my Research</button>
                  </Link>
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
                <h3>Consulting</h3>
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
                <h3>Technology</h3>
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
                <h3>Consulting</h3>
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

        <section className='whykibog--wrapper'></section>
      </main>
    </Fragment>
  );
};

export default Home;
