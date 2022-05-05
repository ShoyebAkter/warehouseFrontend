import React from 'react';
import Banner from '../Headers/Banner/Banner';
import Headers from '../Headers/Headers';
import Items from '../Items.js/Items';
import Podcaster from '../Podcast/Podcasters/Podcasters';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <Items></Items>
            <Podcaster></Podcaster>
            <Review></Review>
        </div>
    );
};

export default Home;