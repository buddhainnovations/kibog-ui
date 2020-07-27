import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
import Profile from '../../assets/images/profile1.jpg';

//images

import Logo from '../../assets/images/caseStudies/first.png';

const Blogs = () => {
  return (
    <Fragment>
      <Navbar />
      <main className='blogs--wrapper'>
        <div className='blogs--recent'>
          <h3>Recent</h3>
          <section className='blogs--recent-card'>
            <p>
              How to Keep Your Employees Safe When Offices Re-open After
              COVID-19 Related Closures
            </p>
          </section>
          <section className='blogs--recent-card'>
            <p>
              How to Keep Your Employees Safe When Offices Re-open After
              COVID-19 Related Closures
            </p>
          </section>
          <section className='blogs--recent-card'>
            <p>
              How to Keep Your Employees Safe When Offices Re-open After
              COVID-19 Related Closures
            </p>
          </section>
        </div>

        <section className='allblog--wrapper'>
          <Container fluid className='allblog--container'>
            <h3>
              All <spsn style={{ fontWeight: 'lighter' }}>Blogs</spsn>
            </h3>
            <Row style={{ justifyContent: 'space-evenly' }}>
              <Col className='allblog--card' xs={5} lg={4}>
                <div className='allblog--card-image'>
                  <figure>
                    {' '}
                    <img src={Profile} alt='' />
                  </figure>
                  <div className='allblog--overlay'></div>
                  <h6 className='allblog--title'>
                    {' '}
                    Personal Protective Equipment (PPE) and Employee Safety –
                    What Organizations Need to Know.center
                  </h6>
                </div>
                <p className='allblog--desc'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. At vero eos et accusam et justo
                  duo dolores et ea rebum.
                </p>
                <h6>marlon</h6>
                <span className='allblog--date'> 12/10/2020</span>
                <span className='allblog--category'>Lifestyle</span>
              </Col>
              <Col className='allblog--card' xs={5} lg={4}>
                <div className='allblog--card-image'>
                  <figure>
                    {' '}
                    <img src={Profile} alt='' />
                  </figure>
                  <div className='allblog--overlay'></div>
                  <h6 className='allblog--title'>
                    {' '}
                    Personal Protective Equipment (PPE) and Employee Safety –
                    What Organizations Need to Know.center
                  </h6>
                </div>
                <p className='allblog--desc'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. At vero eos et accusam et justo
                  duo dolores et ea rebum.
                </p>
                <h6>marlon</h6>
                <span className='allblog--date'> 12/10/2020</span>
                <span className='allblog--category'>Lifestyle</span>
              </Col>
              <Col className='allblog--card' xs={5} lg={4}>
                <div className='allblog--card-image'>
                  <figure>
                    {' '}
                    <img src={Profile} alt='' />
                  </figure>
                  <div className='allblog--overlay'></div>
                  <h6 className='allblog--title'>
                    {' '}
                    Personal Protective Equipment (PPE) and Employee Safety –
                    What Organizations Need to Know.center
                  </h6>
                </div>
                <p className='allblog--desc'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. At vero eos et accusam et justo
                  duo dolores et ea rebum.
                </p>
                <h6>marlon</h6>
                <span className='allblog--date'> 12/10/2020</span>
                <span className='allblog--category'>Lifestyle</span>
              </Col>
              <Col className='allblog--card' xs={5} lg={4}>
                <div className='allblog--card-image'>
                  <figure>
                    {' '}
                    <img src={Profile} alt='' />
                  </figure>
                  <div className='allblog--overlay'></div>
                  <h6 className='allblog--title'>
                    {' '}
                    Personal Protective Equipment (PPE) and Employee Safety –
                    What Organizations Need to Know.center
                  </h6>
                </div>
                <p className='allblog--desc'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. At vero eos et accusam et justo
                  duo dolores et ea rebum.
                </p>
                <h6>marlon</h6>
                <span className='allblog--date'> 12/10/2020</span>
                <span className='allblog--category'>Lifestyle</span>
              </Col>
              <Col className='allblog--card' xs={5} lg={4}>
                <div className='allblog--card-image'>
                  <figure>
                    {' '}
                    <img src={Profile} alt='' />
                  </figure>
                  <div className='allblog--overlay'></div>
                  <h6 className='allblog--title'>
                    {' '}
                    Personal Protective Equipment (PPE) and Employee Safety –
                    What Organizations Need to Know.center
                  </h6>
                </div>
                <p className='allblog--desc'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. At vero eos et accusam et justo
                  duo dolores et ea rebum.
                </p>
                <h6>marlon</h6>
                <span className='allblog--date'> 12/10/2020</span>
                <span className='allblog--category'>Lifestyle</span>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </Fragment>
  );
};

export default Blogs;
