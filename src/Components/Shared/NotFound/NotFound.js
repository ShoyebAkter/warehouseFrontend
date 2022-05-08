import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <h1 className='d-flex justify-content-center'>404</h1>
            <h3 className='d-flex justify-content-center'>Oops Page Not Found</h3>
            <Link to="/home" className='text-primary mt-2 d-flex justify-content-center pe-auto text-decoration-none' >Go to HomePage</Link>
        </div>
    );
};

export default NotFound;