import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Team from '../Team/Team';
import InfoList from '../InfoList/InfoList';

const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <About></About> 
           <Team></Team>
           <InfoList></InfoList>
        </div>
    );
};

export default Home;