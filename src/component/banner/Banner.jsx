import React from 'react';
import playStore from '../../assets/playstore.png'

import appStore from '../../assets/appstore.png'

const Banner = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-[72px]  text-center font-bold'> We Build <br />
<span className='bg-gradient-to-r from-[#632ee3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span> Apps</h1>
<p className='text-center text-[#627382] w-[70%]'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
     <div className='flex gap-8 mt-5'>
        <div className='flex gap-2'>
            <img src={playStore} alt="" />
            <h2 className='font-semibold'>Google Play</h2>
        </div>
        <div className='flex gap-2'>
            <img src={appStore} alt="" />
            <h2 className='font-semibold'>App Store</h2>
        </div>
        </div>       
        </div>
    );
};

export default Banner;