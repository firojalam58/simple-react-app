import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <Container>
            \<Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header><h3 className='text-success'>1. What is E-commerce?</h3></Accordion.Header>
                <Accordion.Body>
                    E-commerce refers to the use of business transactions and facilities over the Internet. This internet commerce is abbreviated as e-commerce. A simple example is selling products online.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><h3 className="text-success">2. What benefits can we get through e-commerce?</h3></Accordion.Header>
                <Accordion.Body>
                    One of the main advantages of an e-commerce business is that you can track everything and anything about the visitors to your website. Customers visiting a website provide a lot of valuable information that can help you provide your customers with a better shopping experience.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><h3 className='text-success'>3. What is web design?</h3></Accordion.Header>
                <Accordion.Body>
                    Website graphics are designed to create website business success user convenience, beautiful network, network site.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><h3 className='text-success'>4. What is web design to learn?</h3></Accordion.Header>
                <Accordion.Body>
                    What to learn to be a web designer? HTML, CSS, JavaScript etc. for coding solutions. HTML is a coding and markup language. By just learning HTML you can create a simple web page.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Container>
    );
};

export default Faq;