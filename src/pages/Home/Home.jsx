// src/pages/Home/Home.jsx
import React from 'react';
import Banner from '../../component/banner/Banner';
import TrustedZone from '../../component/Trusted/TrustedZone';
import { NavLink, useLoaderData } from 'react-router';
import SingleApp from '../../component/data/SingleApp';

const Home = () => {

const dataApp=useLoaderData()


    return (
        <div>


         <Banner></Banner>
         <TrustedZone></TrustedZone>
         <div>
            <h1 className='text-[48px] font-bold text-center mt-12 mb-4'>Trending Apps</h1>
            <p className='text-xl text-center mb-8 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

          <div className='grid grid-cols-4 gap-5 '>
              {
                dataApp.map(data=> <SingleApp key={data.id} data={data}></SingleApp> )
            }
          </div>
          <div className='flex justify-center'>
          <a href="/apps">
  <button className="bg-gradient-to-r from-[#632ee3] to-[#9F62F2] px-8 py-3 font-semibold my-4 rounded-sm text-white text-2xl">
    Show All
  </button>
</a>

          </div>
         </div>
            
        </div>
    );
};

export default Home;