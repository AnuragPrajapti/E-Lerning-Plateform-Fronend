import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './homePage.scss'

const HomePage = () => {

  const navigate = useNavigate()
  const handleClick = () =>{
     navigate("/signin")
  }

  return (
    <div className='home-page-wrapper' id='home' >
      <Container>
        <Row className='left-pera-content'>
          <Col>
            <p className='pera-heading' >Manage Your <span>Pre-<br />Construction</span>  And<br />
              <span> Biddings </span>  The Smart Way</p>
            <p className='pera-titile'>Join the most comprehehensive Bid management and<br /> construction Networking App</p>
            <Button onClick={handleClick} >Get Started For Free</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default HomePage;