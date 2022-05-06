// The page should display detailed item information like id,
//  name, image, description, price, quantity, supplier name, sold, etc. This page will have a Button named delivered. 
import React from 'react';
import { useParams } from 'react-router-dom';
import useCarDetails from '../../hooks/useCarDetails/useCarDetails';

const CarsDetails = () => {
    const {carId}=useParams()
    const [car]=useCarDetails(carId)
    console.log(carId,car)

    const handleQuantity=id=>{

    }
    return (
        <div>
            <h2>Car Id: {car._id} </h2>
            <p>Car : {car.name}</p>
            <p>description: {car.description}</p>
            <p>Price: {car.price}</p>
            <p>Quantity: {car.quantity}</p>
            <button className='btn btn-primary m-2'>Delivered</button><br></br>
            <input className='m-2' type="number" name="quantity" id="" placeholder='Restock' /><br></br>
            <button className='btn btn-primary m-2'>Restock</button>
        </div>
    );
};

export default CarsDetails;