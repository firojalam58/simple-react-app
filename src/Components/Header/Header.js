import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import images  from './images/dark-logo.png'
const Header = () => {
  const handleGoogleSignin = ()=>{

  }


    return (
            
   <div>
      <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'><img src={images} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Link className='link' to={'/'}>Home</Link>
                        <Link className='link' to={'/about'}>About Us</Link>
                        <Link className='link' to={'/blog'}>Blog</Link>
                        <Link className='link' to={'/course'}>Courses</Link>
                        <Link className='link' to={'/contract'}>Contract</Link>
                        <Link className='link btn btn-primary' to={'/login'}>Login</Link>
                        <Link onClick={handleGoogleSignin} className='link btn btn-primary' to={'/register'}>Register</Link>
                    </Nav>
                    <Nav>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

</div>





    );
};

export default Header;