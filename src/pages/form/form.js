import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from '../../components/navbar/navbar';

const Form = () => {
  return (
    <Fragment>
      <Navbar />

      <main className='whykibog-main'>
        <figure>
          <h3>Contact Us</h3>
        </figure>
        <form className='form--box'>
          <label className='form--lable'>
            <span className='lable--name'>
              {' '}
              Name <span className='lable--option'>(optional)</span>
            </span>
            <input type='text' className='inputbox' />
          </label>
          <label className='form--lable'>
            <span className='lable--name'>
              {' '}
              Name <span className='lable--option'>(optional)</span>
            </span>
            <input type='text' />
          </label>
          <label className='form--lable'>
            <span>
              {' '}
              Name <span>(optional)</span>
            </span>
            <input type='text' />
          </label>
          <label className='form--lable'>
            <span>
              {' '}
              Name <span>(optional)</span>
            </span>
            <input type='text' />
          </label>
          <label className='form--lable'>
            <span>
              {' '}
              Name <span>(optional)</span>
            </span>
            <input type='text' />
          </label>
          <label className='form--lable'>
            <span>
              {' '}
              Name <span>(optional)</span>
            </span>
            <select id='country' name='country'>
              <option value='australia'>Australia</option>
              <option value='canada'>Canada</option>
              <option value='usa'>USA</option>
            </select>
          </label>

          <label className='form--lable'>
            <input type='checkbox' />
            <span></span>
          </label>

          <input className='form--submit' type='submit' value='Submit' />
        </form>
      </main>
    </Fragment>
  );
};

export default Form;
