// src/component/apps/Apps.jsx
import React, { useEffect, useState } from 'react';
import Allapps from '../allapps/Allapps';
import { useLoaderData } from 'react-router';
import SingleApp from '../data/SingleApp';
import search from '../../assets/search.png'


const Apps = () => {

    const allData=useLoaderData();
    const [searchText, setSearchText] = useState("")
     const [applength, setapplength] = useState(allData.length);

    const filteredData = allData.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
    
  );

  useEffect(() => {
    setapplength(filteredData.length);
  }, [filteredData]);
    


    return (
        <div>
            <h1 className='text-[48px] text-center font-bold my-4 '>Our All Applications</h1>
            <p className='text-center text-[#627382] text-xl my-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
           <div className='flex justify-between my-6'>
            <h1 className='text-2xl font-semibold'> ({applength}) Apps found  </h1>
            <div className='flex items-center border border-amber-200 rounded-sm '>
                <img className='w-10 h-10' src={search} alt="" />
                <input onChange={(e) => {setSearchText(e.target.value).setapplength(filteredData)}} type="search" name="search" id="" placeholder='Search' className='text-xl items-center pb-1 outline-0 border-none' />
                
            </div>
           </div>
            <div className='grid grid-cols-4 gap-6 flex-1  '>
                {filteredData.length > 0 ? (
          filteredData.map(data => (

            <Allapps key={(data.id)} data={data} />
          ))
        ) : (
          <div className='col-span-4 flex justify-center items-center flex-col w-full'>
            <p className="text-center block text-8xl w-full col-span-4 text-gray-500 mb-3">No apps found</p>
             <div className='flex justify-center'>
          <a href="/apps">
  <button className="bg-gradient-to-r from-[#632ee3] to-[#9F62F2] px-8 py-3 font-semibold my-4 rounded-sm text-white text-2xl">
    Show All
  </button>
</a>

          </div>
          </div>
            

        )}

            </div>
          
        </div>
    );
};

export default Apps;