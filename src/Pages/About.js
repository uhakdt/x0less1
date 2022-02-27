import React from 'react';
import { Container } from 'react-bootstrap';

import Banner from '../Components/Banner';
import './About.css';

export default function About() {
  return (
    <div>
      <Banner />
      <Container>
        <div className='mainSpacing'>
          <div className='title'>
            What is 0 &#60; 1?
          </div>
          <div className='content'>
            Name: Mier Rashid. Code (Pen) name: uhakdt (6 random letters). <br />
            I try to explain concepts I deem interesting using simple terms and without the least amount of background as possible. The concepts will mainly include technical topics. These will be topics I am learning myself about and most likely will contain mistakes. Please send me an email on: <a href='mailto:uhakdt@gmail.com'>uhakdt@gmail.com</a>, if that is the case. <br />
            It also will have a list of projects I have or am working on. Will update that page soon.
          </div>
        </div>
      </Container>
    </div>
  )
}