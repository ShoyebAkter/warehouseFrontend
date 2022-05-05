import React from 'react';

const Podcaster = ({podCaster}) => {
    const {id,img}=podCaster;
    return (
        <div>
            <img src={img} alt=''></img>
        </div>
    );
};

export default Podcaster;