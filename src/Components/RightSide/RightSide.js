import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightSide = () => {
    const [coursesList,setCoursesList] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then (res => res.json())
        .then (data => setCoursesList(data))
    },[])
    
    return (
        <div>
        <h2>All Courses :{coursesList.length}</h2>
        <div>
            {
                coursesList.map(category => <p
                    key={category.id}

                >
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={category.image_url} />
                                <Card.Body>
                                    <Button className='text-white' style={{ width: '100%' }} variant='secondary'>  <Link to={`/courses/${category.id}`}>{category.name}</Link></Button>
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

