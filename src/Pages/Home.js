import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Banner from '../Components/Banner';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Banner />
      <Container>
        <div className='postTitles'>
          <Link className='postTitle links' to='post1'>
            <div style={{ display: 'inline-block' }}>27/02/2022&#160; - &#160;First Post</div>
          </Link>
        </div>
      </Container>
    </div>
  )
};