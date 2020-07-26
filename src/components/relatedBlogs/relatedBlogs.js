import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

//import components

//images
import Profile from '../../assets/images/profile1.jpg';

import Product from '../../assets/product image/productimage.jpg';

const RelatedBlogs = () => {
  return (
    <Fragment>
      <section className='relatedblog--wrapper'>
        <Container fluid className='relatedblog--container'>
          <h3>
            Related <spsn style={{ fontWeight: 'lighter' }}>Blogs</spsn>
          </h3>
          <Row style={{ justifyContent: 'flex-end' }}>
            <Col className='relatedblog--card' xs={5} lg={3}>
              <div className='relatedblog--card-image'>
                <figure>
                  {' '}
                  <img src={Profile} alt='' />
                </figure>
                <div className='relatedblog--overlay'></div>
                <h6 className='relatedblog--title'>
                  {' '}
                  Personal Protective Equipment (PPE) and Employee Safety – What
                  Organizations Need to Know.center
                </h6>
              </div>
              <p className='relatedblog--desc'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. At vero eos et accusam et justo
                duo dolores et ea rebum.
              </p>
              <h6>marlon</h6>
              <span className='relatedblog--date'> 12/10/2020</span>
              <span className='relatedblog--category'>Lifestyle</span>
            </Col>
            <Col className='relatedblog--card' xs={5} lg={3}>
              <div className='relatedblog--card-image'>
                <figure>
                  {' '}
                  <img src={Profile} alt='' />
                </figure>
                <div className='relatedblog--overlay'></div>
                <h6 className='relatedblog--title'>
                  {' '}
                  Personal Protective Equipment (PPE) and Employee Safety – What
                  Organizations Need to Know.center
                </h6>
              </div>
              <p className='relatedblog--desc'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. At vero eos et accusam et justo
                duo dolores et ea rebum.
              </p>
              <h6>marlon</h6>
              <span className='relatedblog--date'> 12/10/2020</span>
              <span className='relatedblog--category'>Lifestyle</span>
            </Col>
            <Col className='relatedblog--card' xs={5} lg={3}>
              <div className='relatedblog--card-image'>
                <figure>
                  {' '}
                  <img src={Profile} alt='' />
                </figure>
                <div className='relatedblog--overlay'></div>
                <h6 className='relatedblog--title'>
                  {' '}
                  Personal Protective Equipment (PPE) and Employee Safety – What
                  Organizations Need to Know.center
                </h6>
              </div>
              <p className='relatedblog--desc'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. At vero eos et accusam et justo
                duo dolores et ea rebum.
              </p>
              <h6>marlon</h6>
              <span className='relatedblog--date'> 12/10/2020</span>
              <span className='relatedblog--category'>Lifestyle</span>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default RelatedBlogs;
