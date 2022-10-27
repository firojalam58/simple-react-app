import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import Download from '../Download/Download';
const Alldetails = () => {
    const cardDetails = useLoaderData([]);
    const { title, details, image_url, } = cardDetails;
    return (
        <div>
            <div>
                <Download rootElementId="pageToDownload" downloadFileName="testPage"></Download>
            </div>
            <div id='pageToDownload'>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Card.Text>
                            Tuotorial Video for learning purpose:
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Alldetails;