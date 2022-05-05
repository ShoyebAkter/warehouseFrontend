import React from 'react';
import Banner from '../Headers/Banner/Banner';
import Headers from '../Headers/Headers';
import Items from '../Items.js/Items';
import Podcasters from '../Podcast/Podcasters/Podcasters';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Podcasters></Podcasters>
            <Review></Review>
        </div>
    );
};

export default Home;