// The page should display detailed item information like id,
//  name, image, description, price, quantity, supplier name, sold, etc. This page will have a Button named delivered. 
import React from 'react';
import { useParams } from 'react-router-dom';
import useCarDetails from '../../hooks/useCarDetails/useCarDetails';

const CarsDetails = () => {
    const {carId}=useParams()
    const [car]=useCarDetails(carId)
    console.log(carId,car)
    return (
        <div>
            <h2>Details about: {car.name} </h2>
        </div>
    );
};

export default CarsDetails;