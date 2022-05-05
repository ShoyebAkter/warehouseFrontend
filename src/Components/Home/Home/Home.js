import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import Contents from '../Contents/Contents';
import Review from '../Review/Review'

const Home = () => {
    return (
        <>
            {/* <PageTitle title="Home"></PageTitle> */}
            <Banner></Banner>
            <Cars></Cars>
            <Contents></Contents>
            <Review></Review>
        </>
    );
};

export default Home;