import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import review1 from '../../../image/review/1.jpg'
import review2 from '../../../image/review/2.jpg'
import review3 from '../../../image/review/3.jpg'

const Review = () => {
    return (
        <div>
            <h2 className='text-primary'>Reviews of different cars</h2>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={review1} />
                    <Card.Body>
                        <Card.Title>Best BMW Car</Card.Title>
                        <Card.Text>
                        BMW makes it a point to create vehicles that are beautifully designed, and don't skimp on the quality. BMW's all-wheel-drive is one of the top systems in the world. For those adventure lovers,
                         their BMW will gladly tackle most terrains including snow and off-road conditions
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={review2} />
                    <Card.Body>
                        <Card.Title>Audi is a reliable brand</Card.Title>
                        <Card.Text>
                        Audi Is a Reliable Brand. When you're searching for a new vehicle, it's imperative to check out the most reliable brands that meet your needs.
                         More reliable vehicles mean fewer maintenance issues in the future, higher safety scores, and models you can trust
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={review3} />
                    <Card.Body>
                        <Card.Title>Ferrari is not just for speed.</Card.Title>
                        <Card.Text>
                        The specificity of Ferrari is not just about speed, it is to give the driver the pleasure to drive the car that he can bring to the limit. Whoever drives a Ferrari, even if he is not an expert driver,
                         can bring the car close to the limit. Then if you want to go to the limit, you have to be a very good driver.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
        </div>
    );
};

export default Review;