import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Hubs from '../Hubs/Hubs';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Inventories></Inventories>
           <Services></Services>
           <Hubs></Hubs>
        </>
    );
};

export default Home;