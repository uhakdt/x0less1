import React from 'react';
import { Container } from 'react-bootstrap';

import Banner from '../Components/Banner';
import './ListX.css'

export default function ListX() {
  return (
    <div>
      <Banner />
      <Container>
        <div className='postTitles'>
          <div className='postTitle'>
            <div style={{ display: 'inline-block', fontSize: 'x-large' }}>&#x2611;</div>
            <div style={{ display: 'inline-block' }}>&#160;&#160;&#160;&#160;</div>
            <div style={{ display: 'inline-block' }}>Create Blog.</div>
          </div>
          <div className='postTitle'>
            <div style={{ display: 'inline-block', fontSize: 'x-large' }}>&#x2612;</div>
            <div style={{ display: 'inline-block' }}>&#160;&#160;&#160;&#160;</div>
            <div style={{ display: 'inline-block' }}>Go to Mars.</div>
          </div>
        </div>
      </Container>
    </div>
  )
};