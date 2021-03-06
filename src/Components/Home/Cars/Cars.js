import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars,setCars]=useState([]);

    useEffect(()=>{
        fetch('https://evening-shore-63424.herokuapp.com/car')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])

    return (
        <div id="cars" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Cars</h1>
            <div className="cars-container">
            {
                cars.slice(0,6).map(car=> <Car
                key={car._id}
                car={car}
                ></Car>)
            }
        </div>
            </div>
        </div>
    );
};

export default Cars;