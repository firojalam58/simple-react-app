import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const {providerlogin} = useContext(AuthContext)

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    providerlogin(email,password)
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
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="password" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
    );
};

export default Login;