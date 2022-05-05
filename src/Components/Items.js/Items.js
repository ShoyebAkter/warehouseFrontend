import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    return (
        <div className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'>My Cars</h1>
            <div className="items-container">
            {
                items.map(item=> <Item
                    key={item.id}
                    item={item}>
                </Item>)
            }
            </div>
            </div>
        </div>
    );
};

export default Items;