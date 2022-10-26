import React from 'react';
import { useContext } from 'react';
import { Image, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Header.css'
import images  from './images/dark-logo.png'
const Header = () => {
  const handleGoogleSignin = ()=>{

  }

  const {user,logout} = useContext(AuthContext)
  const handleLogout = () =>{
        logout ()
        .then ( () =>{})
        .catch ( error => console.error(error))
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
                        
                       
                        <>
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '50px', width:'50px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>
                                }

                            </>
                       { user?.email ?
                        <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
                        : <>
                        <Link className='link btn btn-primary' to={'/login'}>Login</Link>
                        <Link onClick={handleGoogleSignin} className='link btn btn-primary' to={'/register'}>Register</Link>
                        </> 
                       }
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