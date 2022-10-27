import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const {providerLogin} = useContext(AuthContext)
    const [loading,setLoading] = useState(true)

    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'


  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    providerLogin(email,password)
   .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error));
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
    <p className='mt-4'>If you are new please <Link to='/register'>Create Account</Link></p>
  </div>
    );
};

export default Login;