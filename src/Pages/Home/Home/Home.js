import React from 'react';
import Banner from '../Banner/Banner';
import Hubs from '../Hubs/Hubs';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Inventories></Inventories>
           <Hubs></Hubs>
        </>
    );
};

export default Home;