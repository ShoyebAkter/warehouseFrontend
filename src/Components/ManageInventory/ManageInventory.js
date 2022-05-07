import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../hooks/useCars/useCars';

const ManageInventory = () => {
    const [cars,setCars]=useCars();
    // console.log(cars)

    

    const handleDelete= id =>{
        const confirm=window.confirm('Are you sure?');
        if(confirm){
            const url=`https://evening-shore-63424.herokuapp.com/car/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining=cars.filter(car=> car._id!==id)
                setCars(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Inventory</h2>
            {
                cars.map(car => <div>
                    <h4>Car: {car.name}</h4>
                    <button onClick={()=>handleDelete(car._id)}>X</button>
                </div>)
            }
            <button><Link to="/addcars" className='text-primary pe-auto text-decoration-none' >Add Cars</Link></button>
        </div>
    );
};

export default ManageInventory;