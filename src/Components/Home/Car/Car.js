import React from 'react';
import './Car.css'
import { useNavigate } from 'react-router-dom';

const Car = ({car}) => {
    const {id,img,description,quantity,price,suppliername,name}=car;
    const naviagate=useNavigate();

    const navigateToCarDetail=(id)=>{
            naviagate(`/carsdetails/${id}`)
    }
    return (
        <div className='car'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h3>{suppliername}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>

            <button onClick={() => navigateToCarDetail(id)} className='btn btn-primary'>Details:{name}</button>
        </div>
    );
};

export default Car;