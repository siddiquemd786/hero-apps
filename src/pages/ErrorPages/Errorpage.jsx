// src/pages/ErrorPages/Errorpage.jsx
import React from 'react';
import error from '../../assets/error-404.png'

const Errorpage = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <img src={error} alt="" />
            <h1 className='text-6xl font-bold text-blue-800'> Page not Found </h1>
        </div>
    );
};

export default Errorpage;