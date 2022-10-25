import React from 'react';
import images from './images/bg-2.jpg';
import './Home.css'
const Home = () => {
    return (
        <div className='banner-image'>
      <img src={images} className="d-block img-fluid w-100" alt="..."/>
    </div>
    );
};

export default Home;