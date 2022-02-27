import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Banner from '../Components/Banner';

export default function Archive() {
  return (
    <div>
      <Banner />
      <Container>
        <div className='postTitles'>
          <Link className='postTitle links' to='post1'>
            <div style={{ display: 'inline-block' }}>19th of February 2022</div>
            <div style={{ display: 'inline-block' }}>&#160;&#160;&#128527;&#160;&#160;&#160;</div>
            <div style={{ display: 'inline-block' }}>First Post</div>
          </Link>
        </div>
      </Container>
    </div>
  )
}