import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Banner.css';

export default function Banner() {
  return (
    <Container className='topSpacing'>
      <Row>
        <Col xs={6}>
          <Link className='logo links' to='/'>0 &#60; 1</Link>
        </Col>
        <Col>
          <Link to='/about' className='links'>about</Link>
        </Col>
        <Col>
          <Link to='/projects' className='links'>projects</Link>
        </Col>
      </Row>
    </Container >
  )
};