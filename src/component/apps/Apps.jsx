// src/component/apps/Apps.jsx
import React, { useState } from 'react';
import Allapps from '../allapps/Allapps';
import { useLoaderData } from 'react-router';
import SingleApp from '../data/SingleApp';
import search from '../../assets/search.png'


const Apps = () => {

    const allData=useLoaderData();
    const [searchText, setSearchText] = useState("")

    const filteredData = allData.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
    


    return (
        <div>
            <h1 className='text-[48px] text-center font-bold my-4 '>Our All Applications</h1>
            <p className='text-center text-[#627382] text-xl my-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
           <div className='flex justify-between my-6'>
            <h1 className='text-2xl font-semibold'> ({allData.length}) Apps found  </h1>
            <div className='flex items-center border border-amber-200 rounded-sm '>
                <img className='w-10 h-10' src={search} alt="" />
                <input onChange={(e) => setSearchText(e.target.value)} type="search" name="search" id="" placeholder='Search' className='text-xl items-center pb-1 outline-0 border-none' />
                
            </div>
           </div>
            <div className='grid grid-cols-4 gap-6 flex-1 '>
                {filteredData.length > 0 ? (
          filteredData.map(data => (
            <Allapps key={data.id} data={data} />
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">No apps found</p>
        )}

            </div>
          
        </div>
    );
};

export default Apps;