import { useState, useEffect } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import * as FaIcons from 'react-icons/fa'


const CommonNavbar = () => {

  const [active, setActive] = useState('home')
  const [close, setClose] = useState(false)
  const showSidebar = () => setClose(!close)

  useEffect(() => {
    handleNavigate('home')
  }, [])

  const handleNavigate = (id: string) => {
    setActive(id)
    const getId = document.getElementById(id) as HTMLInputElement | any
    getId.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }


  return (
    <>
      <Navbar className="navbaar-wrapper fixed-top" expand="lg">
        <Navbar.Toggle>
          <FaIcons.FaBars aria-controls="basic-navbar-nav" className="manu-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse  id="basic-navbar-nav"  >
          <Container>
            <Row  className="justify-content-center d-flex" >
              {/* <Col  >
            </Col> */}
              <Col>
                <Nav className="common-navbar" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
                  <Navbar.Brand >E-Lerning-PlateForm</Navbar.Brand>
                  <NavLink onClick={() => handleNavigate('home')} className={`${active === 'home' && 'active'}`} to="/">Home_Page</NavLink>
                  <NavLink onClick={() => handleNavigate('slider')} className={`${active === 'slider' && 'active'}`} to="/">Range_Page</NavLink>
                  <NavLink onClick={() => handleNavigate('profile')} className={`${active === 'profile' && 'active'}`} to="/">Profile</NavLink>
                  <NavLink onClick={() => handleNavigate('feature')} className={`${active === 'feature' && 'active'}`} to="/">Feature</NavLink>
                  <NavLink onClick={() => handleNavigate('pricing')} className={`${active === 'pricing' && 'active'}`} to="/">Pricing</NavLink>
                  <NavLink onClick={() => handleNavigate('accordion')} className={`${active === 'accordion' && 'active'}`} to="/">Accordion</NavLink>
                  <NavLink onClick={() => handleNavigate('footer')} className={`${active === 'footer' && 'active'}`} to="/">Footer</NavLink>
                  <NavLink to="/signin">Login</NavLink>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CommonNavbar;
