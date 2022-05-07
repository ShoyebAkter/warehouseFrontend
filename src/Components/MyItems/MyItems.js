import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosPrivate from '../../Components/api/axiosPrivate';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user]=useAuthState(auth);
    const [items,setItems]=useState([]);
    const navigate=useNavigate();

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

    return (
        <div className='w-50 mx-auto'>
            <h2>My total Items: {items.length} </h2>
            {
                items.map(item=> <div key={item._id}>
                    <p>{item.email} : {item.car}</p>
                </div>)
            }
        </div>
    );
};

export default MyItems;