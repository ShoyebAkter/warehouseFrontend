import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import news1 from '../../../image/news/news1.jpg'
import news2 from '../../../image/news/news2.jpg'
import news3 from '../../../image/news/news3.jpg'

const Content = () => {

    return (
        <div className='mt-3 mb-3'>
            <h2 className='text-primary'>Trending News</h2>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={news1} />
                    <Card.Body>
                        <Card.Title> Electric Vehicles</Card.Title>
                        <Card.Text>
                          Why 2021 is shaping up to be a pivotal year for electric vehicles 
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={news2} />
                    <Card.Body>
                        <Card.Title>Future of Electric cars</Card.Title>
                        <Card.Text>
                            Why electric cars will take over sooner than you think
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={news3} />
                    <Card.Body>
                        <Card.Title>Price of Electric Cars</Card.Title>
                        <Card.Text>
                            Electric cars 'as cheap to manufacture' as regular models by 2024
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
        </div>
    );
};

export default Content;