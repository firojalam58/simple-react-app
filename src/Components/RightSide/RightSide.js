import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './RightSide.css'

const RightSide = () => {
    const [coursesList,setCoursesList] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then (res => res.json())
        .then (data => setCoursesList(data))
    },[])
    
    return (
        <div>
        <h2>Our Courses: {coursesList.length}Items</h2>
        <div className='row row-cols-lg-3 g-40'>
            {
                coursesList.map(category => <p
                    key={category.id}

                >
                    
                    <Row>
                        <Col>
                            <Card style={{  height: '400px'}}>
                                <Card.Img style={{ width: '18rem', height: '400px'}} variant="top" src={category.image_url} />
                                <Card.Body>
                                <Button  style={{ width: '100%' }} variant="primary"><Link to={`/courses/${category.id}`} className='links'>{category.name} </Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                </p>)
            }
        </div>
    </div>
    );
};

export default RightSide;

