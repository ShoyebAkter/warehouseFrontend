import React from 'react';
import './Car.css'
import { Link, useNavigate } from 'react-router-dom';

const Car = ({car}) => {
    const {_id,img,description,quantity,price,suppliername,name}=car;
    const naviagate=useNavigate();

    const navigateToCarDetail=(id)=>{
            naviagate(`/car/${id}`)
    }
    const navigateManageInventory=()=>{
        naviagate(`manage`);
    }
    return (
        <div className='car'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h3>{suppliername}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>

            <button onClick={() => navigateToCarDetail(_id)} className='btn btn-primary'>Details:{name}</button><br></br>
            <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateManageInventory}>Manage Inventory</Link>
            
        </div>
    );
};

export default Car;