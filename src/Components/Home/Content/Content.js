import React from 'react';

const Content = ({content}) => {
    const {img,description}=content;
    return (
        <div>
            <img src={img} alt=""></img>
            <p>{description} </p>
        </div>
    );
};

export default Content;