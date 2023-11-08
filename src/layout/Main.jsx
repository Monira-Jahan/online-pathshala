import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-slate-100 px-12 py-12'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;