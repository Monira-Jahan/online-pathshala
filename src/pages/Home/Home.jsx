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
           <InfoList></InfoList>
           <Team></Team>
           
        </div>
    );
};

export default Home;