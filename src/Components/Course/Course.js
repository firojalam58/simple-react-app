import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
const Course = () => {
    return (
        <div>
             <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg="9">
                        <RightSide></RightSide>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;