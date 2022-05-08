import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useCarDetails from '../../hooks/useCarDetails/useCarDetails';
import { Link, Navigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../api/axiosPrivate';
import axios from 'axios';

const UpdateProduct = () => {
    const {carId} =useParams();
    const [car] = useCarDetails(carId);
    const [user] = useAuthState(auth);
    const [cars ,setCars]=useState({})
    const [qty,setQty] =useState(0)
    useEffect(()=>{
fetch(`https://evening-shore-63424.herokuapp.com/car/${carId}`)
.then(res=>res.json())
.then(data=>{setCars(data)
            setQty(data.quantity)})
    },[qty])

    const handleUpdateproduct=event =>{
        event.preventDefault()
        const quantity=parseInt(event.target.quantity.value)+parseInt(cars.quantity)
        if(parseInt(quantity)<1){
            return alert('number of products cannot be less than 0')}
        const updateproduct={quantity}
        fetch(`https://evening-shore-63424.herokuapp.com/car/${carId}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)
        setQty(quantity)
    alert('product updated successfully')})
    }

    


    const handleDeliveryproduct=event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            car: car.name,
            carId: carId,
        }
        axios.post('https://evening-shore-63424.herokuapp.com/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                alert('Your order is booked!!!');
                event.target.reset();
            }
        })
        if(parseInt(cars.quantity)===0){
            return alert('stock out')
        }
        const quantity=parseInt(cars.quantity)-1
        const updateproduct={quantity}
        fetch(`https://evening-shore-63424.herokuapp.com/car/${carId}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)
        setQty(quantity)
    alert('product delivered successfully')}
    )
    }
    return (
        <div className='w-50 mx-auto' >
        <p>{carId}</p>
        <p>Description: {cars.description}</p>
        <p>Price: {cars.price}</p>
        <h2>Updating Cars: {cars.name}</h2>
        <button className='btn btn-primary' onClick={handleDeliveryproduct}>Delivered</button>
        <p>Quantity: {qty}</p>
        <form onSubmit={handleUpdateproduct}> 

                <input type="number" name='quantity' placeholder='enter quantity' required />
                <br/>
                <input className='bg-primary text-white p-2 rounded mt-2' style={{border:'none'}} type='submit'   value='add to stock'/>
            </form>
            <Link to="/manage" className='text-primary d-flex justify-content-center pe-auto text-decoration-none' >Manage Inventory</Link>
        </div>
    );
};

export default UpdateProduct;