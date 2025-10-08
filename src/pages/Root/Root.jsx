import React from 'react';
import Navbar from '../../component/Header/Navbar';
import Footer from '../../component/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div  className="flex flex-col min-h-screen ">
            <Navbar></Navbar>
           <div className='flex-grow'>
 <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;