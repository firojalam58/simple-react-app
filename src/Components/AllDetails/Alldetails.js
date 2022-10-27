import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
const Alldetails = () => {
    const cardDetails = useLoaderData([]);
    const { title, details, image_url, } = cardDetails;
    return (
        <div>
            <div>
                {/* <DownloadPage rootElementId="pageToDownload" downloadFileName="testPage"></DownloadPage> */}
            </div>
            <div id='pageToDownload'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"  />
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