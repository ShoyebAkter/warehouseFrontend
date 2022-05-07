import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import Contents from '../Contents/Contents';
import Review from '../Review/Review'

const Home = () => {
    const navigate=useNavigate();
    
    return (
        <div className="container">
            {/* <PageTitle title="Home"></PageTitle> */}
            <Banner></Banner>
            <Cars></Cars>
            <Link to="/manage" className='text-primary pe-auto text-decoration-none' >Manage Inventory</Link>
            <Contents></Contents>
            <Review></Review>
            
        </div>
    );
};

export default Home;