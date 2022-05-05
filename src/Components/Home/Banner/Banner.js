import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner/intro-1643053422.jpg'

const Banner = () => {
    return (
        <div className='container'>
            <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Best car for men</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
        </div>
    );
};

export default Banner;