import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from '../../components/navbar/navbar';

const WhyKibog = () => {
  return (
    <Fragment>
      <Navbar />
      <main className='whykibog-main'>
        <h3>this page is under construction</h3>
        <section className='hero'>
          <div className='hero--desc'>
            <p></p>
          </div>
          <div className='hero--image'>
            <figure>
              <img src='' alt='' />
            </figure>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default WhyKibog;
