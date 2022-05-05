import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { id, name, price, description, img } = item;
    const navigate = useNavigate();

    const navigateToitemDetail = id => {
        navigate(`/item/${id}`);
    }

    return (

        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToitemDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Item;