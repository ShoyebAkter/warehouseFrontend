import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosPrivate from '../../Components/api/axiosPrivate';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useCars from '../../hooks/useCars/useCars';

const MyItems = () => {
    const [cars,setCars]=useCars();
    const [user]=useAuthState(auth);
    const [items,setItems]=useState([]);
    const navigate=useNavigate();
    console.log(items)

    useEffect(()=>{
        const getItems=async()=>{
            const email=user?.email;
            console.log(email)
            const url=`https://evening-shore-63424.herokuapp.com/order?email=${email}`;
            try{
                const {data}=await axiosPrivate.get(url);
                setItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status===401 || error.response.status===403){
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItems()
    },[user])

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
            <h2>My total Items: {items.length} </h2>
            {
                items.map(item=>
                 <div className='border border-secondary rounded d-flex justify-content-between p-3 my-2' key={item._id}>
                    <h4>{item.email} : {item.car}</h4>
                    <button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default MyItems;