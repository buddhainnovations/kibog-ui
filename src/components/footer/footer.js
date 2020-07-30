import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

//company logo import
import LogoWhite from '../../assets/images/logo-white.svg';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <section className='footer--wrapper'>
          <figure>
            <img src={LogoWhite} alt='' />
          </figure>

          <Container fluid className='footer--container' lg={3}>
            <Row>
              <Col className='footer--col'>
                <h5>Links</h5>
                <div>
                  <a href='#'>
                    <i class='fa fa-angle-double-right'></i> Home
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Consulting
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Technology
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Distribution
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Contact&nbsp;Us
                  </a>
                </div>
              </Col>
              <Col className='footer--col' lg={3}>
                <h5>Legal</h5>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> About&nbsp;Us
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Privacy&nbsp;Polecy
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Terms & Conditions{' '}
                  </a>
                </div>
              </Col>
              <Col className='footer--col' lg={3}>
                <h5>Resources </h5>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Blogs
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Press&nbsp;Release
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Case&nbsp;Studies
                  </a>
                </div>
                <div>
                  <a href=''>
                    <i class='fa fa-angle-double-right'></i> Support
                  </a>
                </div>
              </Col>
              <Col className='footer--col subscribe' lg={3}>
                <h5>Subscribe us</h5>
                <div>
                  <input type='text' name='' id='' placeholder='email' />
                  <button>Send</button>
                </div>
                <span className='social'>
                  <a href='https://www.facebook.com/KibogInc/'>
                    <i
                      class='fa fa-facebook'
                      style={{ fontSize: '1.5rem', padding: '0 1rem' }}
                    ></i>
                  </a>
                  <a href=''>
                    <i
                      class='fa fa-instagram'
                      style={{ fontSize: '1.5rem', padding: '0 1rem' }}
                    ></i>
                  </a>
                  <a href=''>
                    <i
                      class='fa fa-twitter'
                      style={{ fontSize: '1.5rem', padding: '0 1rem' }}
                    ></i>
                  </a>
                  <a href=''>
                    <i
                      class='fa fa-linkedin'
                      style={{ fontSize: '1.5rem', padding: '0 1rem' }}
                    ></i>
                  </a>
                </span>
              </Col>
            </Row>
          </Container>

          <section className='copyright'>
            Copyright &copy; Kibog Inc 2019 - 2020 Developed By{' '}
            <a href='https://www.buddhainnovations.com/'>
              {' '}
              Buddha Innovations Tech
            </a>
          </section>
        </section>
      </footer>
    </Fragment>
  );
};

export default Footer;
