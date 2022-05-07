// The page should display detailed item information like id,
//  name, image, description, price, quantity, supplier name, sold, etc. This page will have a Button named delivered. 
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useCarDetails from '../../hooks/useCarDetails/useCarDetails';

const CarsDetails = () => {
    const {carId}=useParams()
    const [car]=useCarDetails(carId)
    const [user]=useAuthState(auth);

    const handleDelivered=event=>{
        event.preventDefault();
        const newQuantity=event.target.quantity.value-1;
        const order={
            email:user.email,
            car:car.name,
            carId:carId,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity:newQuantity,
            price:event.target.price.value
        }
        axios.post('https://evening-shore-63424.herokuapp.com/order',order)
        .then(response=>{
            console.log(response)
            const {data}=response;
            if(data.insertedId){
                toast('Your order is delivered');
                event.target.reset();
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {car.name}</h2>
            <form onSubmit={handleDelivered}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={car.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={car.price} name="price" placeholder='price' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={car.quantity} name="quantity" placeholder='quantity' required  />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary mb-2' type="submit" value="Place Order" />
                <br />
                <input className='w-100 mb-2' type="number" name="restock" placeholder='restock' required />
                <br />
                <button className='btn btn-primary'>Restock</button>
            </form>
        </div>
    );
};

export default CarsDetails;