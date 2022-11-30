import React from 'react';
import Advertised from '../../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Extrasection from '../Extrasection/Extrasection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Extrasection></Extrasection>
        </div>
    );
};

export default Home;