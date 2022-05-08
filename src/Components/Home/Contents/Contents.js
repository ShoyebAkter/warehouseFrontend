import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';

const Contents = () => {
    const [contents,setContents]=useState([]);

    useEffect(()=>{
        fetch('contents.json')
        .then(res=>res.json())
        .then(data=>setContents(data));
    },[])
    return (
        <div className='container'>
            
            {
                contents.map(content=> <Content
                key={content.id}
                content={content}
                ></Content>)
            }
        </div>
    );
};

export default Contents;