import React from 'react';
import { Container } from 'react-bootstrap';

import Banner from '../../Components/Banner';
import './Posts.css';

export default function Post1() {
  return (
    <div>
      <Banner />
      <Container>
        <div className='mainSpacing'>
          <div className='title'>
            First Post
          </div>
          <div className='content'>

          </div>
        </div>
      </Container>
    </div>
  )
}