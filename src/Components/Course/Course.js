import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
const Course = () => {
    return (
        <div>
             <Container>
                <Row>
                    <Col lg="4">
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg="8">
                        <RightSide></RightSide>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;