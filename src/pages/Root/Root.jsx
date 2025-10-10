// src/pages/Root/Root.jsx
import React from 'react';
import Navbar from '../../component/Header/Navbar';
import Footer from '../../component/Footer/Footer';
import { Outlet } from 'react-router';
 import { ToastContainer} from 'react-toastify';

const Root = () => {
    return (
        <div  className="flex flex-col min-h-screen ">
            <Navbar></Navbar>
           <div className='flex-grow'>
 <Outlet></Outlet>
           </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
    
};

export default Root;