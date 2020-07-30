import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

//import components

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
//images

import Product from '../../assets/product image/productimage.jpg';
import HreoConsulting from '../../assets/images/HeroConsulting.jpg';

const Technology = () => {
  return (
    <Fragment>
      <Navbar />

      <section className='technology--hero'>
        <div className='hero--content'>
          <h1>Technology Products</h1>
          <h6>
            Today, business and technology are inextricably linked and demand
            for technology-enabled business solutions are rapidly growing. Blue
            Kanyon helps clients resolve their information and technology
            challenges and supports them in optimizing their business
            operations.
          </h6>
          <button>Request a demo</button>
        </div>
      </section>

      <section className='technology--product--display'>
        <h2>
          Our <strong style={{ color: '#0f4c81' }}>Solutinos</strong> For Your
          <strong style={{ color: '#0f4c81' }}> Business </strong>
        </h2>

        <h3>Products/Services</h3>

        <Container fluid className='card--wrapper'>
          <Row style={{ justifyContent: 'flex-end' }}>
            {/* Course box here */}
            <Col className='product--cards' lg={3}>
              <div className='image--container'>
                <figure>
                  <img src={Product} alt='' />
                </figure>
              </div>

              <h5>Health Canada Registration & Licensing</h5>
              <p>
                The digital expectations of customers and citizens is profoundly
                transforming how businefds The digital expectations of customers
                and citizens is profoundly transforming how businefds The
                digital expectations of customers and citizens is profoundly
                transforming how businefdsfdsaf fdsafasd fsdafsdaf dfsaf asdfs
              </p>

              <button>Find Solution</button>
            </Col>
            <Col className='product--cards' lg={3}>
              <div className='image--container'>
                <figure>
                  <img src={Product} alt='' />
                </figure>
              </div>

              <h5>Health Canada Registration & Licensing</h5>
              <p>
                The digital expectations of customers and citizens is profoundly
                transforming how businefds The digital expectations of customers
                and citizens is profoundly transforming how businefds The
                digital expectations of customers and citizens is profoundly
                transforming how businefdsfdsaf fdsafasd fsdafsdaf dfsaf asdfs
              </p>

              <button>Find Solution</button>
            </Col>
            <Col className='product--cards' lg={3}>
              <div className='image--container'>
                <figure>
                  <img src={Product} alt='' />
                </figure>
              </div>

              <h5>Health Canada Registration & Licensing</h5>
              <p>
                The digital expectations of customers and citizens is profoundly
                transforming how businefds The digital expectations of customers
                and citizens is profoundly transforming how businefds The
                digital expectations of customers and citizens is profoundly
                transforming how businefdsfdsaf fdsafasd fsdafsdaf dfsaf asdfs
              </p>

              <button>Find Solution</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Technology;
