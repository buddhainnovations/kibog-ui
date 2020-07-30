import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

//import components
import whitePaper from '../../assets/images/stickey.png';

const CaseStudies = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <section className='stickey--icon' onClick={handleShow}>
        <img src={whitePaper} alt='' />
      </section>

      <Modal show={show} onHide={handleClose} className='modal--container'>
        <figure>
          <h3>Download Our Whitepaper</h3>
        </figure>

        <form className='modal--form--box'>
          <label className='modal--form--lable'>
            <span className='modal--lable--name'>
              {' '}
              Name <span className='modal--lable--option'>(optional)</span>
            </span>
            <input type='text' className='modal--inputbox' />
          </label>
          <label className='modal--form--lable'>
            <span className='modal--lable--name'>
              {' '}
              Email <span className='modal--lable--option'>(optional)</span>
            </span>
            <input type='text' className='modal--inputbox' />
          </label>
          <label className='modal--form--lable'>
            <span className='modal--lable--name'>
              {' '}
              Phone No <span className='modal--lable--option'>(optional)</span>
            </span>
            <input type='text' className='modal--inputbox' />
          </label>

          <button>
            Download <i class='fa fa-long-arrow-right'></i>
          </button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default CaseStudies;
