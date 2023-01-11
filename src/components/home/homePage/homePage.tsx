import React from 'react'
import { Container , Row ,Col , Button } from "react-bootstrap";
import './homePage.scss'
import  HERO_ENGINEER  from '../../../assets/homePage/home/hero-engineer.png'

const HomePage = () => {
  return (
    <div className='home-page-wrapper' id='home' >
    <Container>
     <Row className='left-pera-content'>
      <Col>
         <p className='pera-heading' >Manage Your <span>Pre-<br />Construction</span>  And<br/>  
         <span> Biddings </span>  The Smart Way</p>
        <p className='pera-titile'>Join the most comprehehensive Bid management and<br /> construction Networking App</p>
         <Button>Get Started For Free</Button>
      </Col>
    </Row>
    </Container>
    </div>
  )
}


export default HomePage;