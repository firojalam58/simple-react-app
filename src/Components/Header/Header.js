import React, { useState } from 'react';
import { useContext } from 'react';
import { Image, Container, Nav, Navbar, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';
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

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Dark', value: '1' },
    { name: 'Success', value: '2' },
  ];

    return (
            
   <div>
      <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'><img src={images} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Link className='link' to={'/'}>Home</Link>
                        <Link className='link' to={'/faq'}>Faq</Link>
                        <Link className='link' to={'/blog'}>Blog</Link>
                        <Link className='link' to={'/course'}>Courses</Link>
                        
                        <ButtonGroup className='me-3'>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-dark'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
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
                       { user ?
                        <button onClick={handleLogout} className='btn btn-primary ms-3'>Logout</button>
                        : <>
                        <Link className='link btn btn-primary' to={'/login'}>Login</Link>
                        <Link onClick={handleGoogleSignin} className='link btn btn-primary' to={'/register'}>Register</Link>
                        </> 
                       }
                    </Nav>
                    <Nav>
                    <div className='d-lg-none'>
                        <LeftSide></LeftSide>
                    </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

</div>





    );
};

export default Header;