import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Register = () => {
  const {register, googleLogin, userUpdate} = useContext(AuthContext)
  
  const handleGoogle = () =>{
    googleLogin()
    .then ( () =>{})
    .catch ( error => console.error(error))
  }


  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo)
    register(email,password)
    .then (res =>{
      const user = res.user;
      console.log(user);
      form.reset();
      handleUser(name,photo);
    })
    .catch (error =>{
      console.error(error)
    })
  }

  const handleUser = (name, photoURL) =>{
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    userUpdate(profile)
    .then (()=>{} )
    .catch((error) =>{
      console.error(error)
    })
  }


    return (
        <div className='w-50 m-auto'>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter Your name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
         <Form.Control  type="text" name="photoURL" placeholder="Enter your photo" required />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <button onClick={handleGoogle} className='btn btn-success mx-5'><FaGoogle></FaGoogle> Google</button>
      <button className='btn btn-success '><FaGithub></FaGithub> Github</button>
    </Form>
    <div>
        
    </div>
        </div>
    );
};

export default Register;