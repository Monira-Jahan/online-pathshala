import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div className=' '>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;