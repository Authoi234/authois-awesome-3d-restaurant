import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='w-full h-auto'>
                <Navbar></Navbar>
            </div>
            <div className='w-full h-auto'>
                <Outlet></Outlet>
            </div>
            <div className='w-full h-4/5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;