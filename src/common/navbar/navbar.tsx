import { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const CommonNavbar = () => {

  const [active, setActive] = useState('home')

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
      <Navbar className="navbaar-wrapper fixed-top " >
        <Container>
          <Navbar.Brand>Event-Deler</Navbar.Brand>
          <Nav className="common-navbar">
            <NavLink onClick={() => handleNavigate('home')} className={`${active === 'home' && 'active'}`} to="/">Home_Page</NavLink>
            <NavLink onClick={() => handleNavigate('slider')} className={`${active === 'slider' && 'active'}`} to="/">Range_Page</NavLink>
            <NavLink onClick={() => handleNavigate('profile')} className={`${active === 'profile' && 'active'}`} to="/">Profile</NavLink>
            <NavLink onClick={() => handleNavigate('feature')} className={`${active === 'feature' && 'active'}`} to="/">Feature</NavLink>
            <NavLink onClick={() => handleNavigate('pricing')} className={`${active === 'pricing' && 'active'}`} to="/">Pricing</NavLink>
            <NavLink onClick={() => handleNavigate('accordion')} className={`${active === 'accordion' && 'active'}`} to="/">Accordion</NavLink>
            <NavLink onClick={() => handleNavigate('footer')} className={`${active === 'footer' && 'active'}`} to="/">Footer</NavLink>
            <NavLink to="/signin">Login</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CommonNavbar;
