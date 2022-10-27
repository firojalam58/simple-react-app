import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const CoursesData = () => {
    const courseDetails = useLoaderData([]);
    console.log(courseDetails);
    const { title, image_url, details, _id } = courseDetails;

    return (
        <div className='mt-5'>



          <Container>
          <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 50 ?
                            <>{
                                details.slice(0, 50) + '...'
                            }<Link to={`/allCourses/${_id}`}>
                                    <Button style={{ width: '80%' }} variant="primary">
                                        Go Premium
                                    </Button>
                                </Link>
                            </> : <>{details}</>
                        }
                    </Card.Text>


                </Card.Body>
            </Card>
          </Container>
        </div>
    );
};

export default CoursesData;