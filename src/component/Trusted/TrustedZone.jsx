// src/component/Trusted/TrustedZone.jsx
import React from 'react';
import hero from '../../assets/hero.png'

const TrustedZone = () => {
    return (
        <div>
            <div>
             
                <img className='md:w-[845px] px-2 mx-auto mt-8' src={hero} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#632ee3] to-[#9F62F2] text-white inter md:pt-20 md:pb-10 '>
                <h2 className='md:text-[48px] text-2xl font-bold text-center'>Trusted by Millions, Built for You</h2>
                <div className='flex flex-col md:flex-row justify-around my-2 pb-8'>
                    <div>
                        <p className='text-center opacity-0.8'>Total Downloads</p>
                        <h1 className='text-[#E1FFFF] md:text-[64px] font-extrabold text-center'>29.6M</h1>
                        <p className='text-center text-[#E1FFFF]'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-center opacity-0.8'>Total Downloads</p>
                        <h1 className='text-[#E1FFFF] md:text-[64px] font-extrabold text-center'>29.6M</h1>
                        <p className='text-center text-[#E1FFFF]'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-center opacity-0.8'>Total Downloads</p>
                        <h1 className='text-[#E1FFFF] md:text-[64px] font-extrabold text-center'>29.6M</h1>
                        <p className='text-center text-[#E1FFFF]'>21% more than last month</p>
                    </div>
                </div>
            </div>
            


        </div>
    );
};

export default TrustedZone;