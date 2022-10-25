import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import images  from './images/dark-logo.png'
const Header = () => {
    return (
            
   <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <Link className='link' to={'/'}>Home</Link>
           <Link className='link' to={'/about'}>About</Link>
           <Link className='link' to={'/course'}>Course</Link>
           <Link className='link' to={'/blog'}>Blog</Link>
          </Nav>
        </Container>
      </Navbar>

</div>





    );
};

export default Header;