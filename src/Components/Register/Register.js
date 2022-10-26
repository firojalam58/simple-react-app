import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle } from 'react-icons/fa';

import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Register = () => {
  const {register} = useContext(AuthContext)
  
  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    register(email,password)
    .then (res =>{
      const user = res.user;
      console.log(user);
      form.reset();
    })
    .catch (error =>{
      console.error(error)
    })
  }



    return (
        <div className='w-50 m-auto'>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <button className='btn btn-primary'><FaGoogle></FaGoogle> Google</button>
    </Form>
    <div>
        
    </div>
        </div>
    );
};

export default Register;