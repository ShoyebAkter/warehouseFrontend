import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../hooks/useCars/useCars';

const ManageInventory = () => {
    const [cars,setCars]=useCars();
    

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
        <div style={{minHeight:'100vh'}}>
            <h2>Manage Inventory</h2>
            
            {
                cars.map(car => <div className='border border-secondary rounded d-flex justify-content-between p-3 my-2'>
                    <h4 className='text-primary'>Car: {car.name}</h4>
                    <h5>Price:{car.price}</h5>
                    <button className='btn btn-danger' onClick={()=>handleDelete(car._id)}>Delete</button>
                </div>)
            }
            <Link to="/addcars" className='text-white rounded p-2 bg-primary text-decoration-none' >Add Cars</Link>
        </div>
    );
};

export default ManageInventory;