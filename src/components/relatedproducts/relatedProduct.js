import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

//import components

//images

import Product from '../../assets/product image/productimage.jpg';

const RelatedProduct = () => {
  return (
    <Fragment>
      <section className='related--wrapper'>
        <h3>Products/Services</h3>

        <Container fluid className='related'>
          <Row style={{ justifyContent: 'flex-end' }}>
            {/* Course box here */}
            <Col className='related--cards' lg={3}>
              <div className='related--cards-image'>
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
            <Col className='related--cards' lg={3}>
              <div className='related--cards-image'>
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
            <Col className='related--cards' lg={3}>
              <div className='related--cards-image'>
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

export default RelatedProduct;
