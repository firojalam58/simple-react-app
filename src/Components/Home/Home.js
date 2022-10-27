import React from 'react';
import images from './images/bg-2.jpg';
import './Home.css'
import Course from '../Course/Course';
const Home = () => {
    return (
      <div>
        <div className='banner-image mb-30'>
      <img src={images} className="d-block img-fluid w-100" alt="..."/>
      
    </div>
    <div className='course mt-30'>
      <Course></Course>
    </div>
    </div>
    );
};

export default Home;