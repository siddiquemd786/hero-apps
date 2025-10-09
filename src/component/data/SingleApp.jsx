// src/component/data/SingleApp.jsx
import React from 'react';
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'

const SingleApp = ({data}) => {
   

    const {image,ratingAvg,reviews,title}=data
    
    return (
        <div>
            <div className='p-4 border border-amber-100 shadow-lg rounded-sm '>

                <div className='flex justify-center'><img className='  w-[316px] h-[316px] border-amber-600 object-contain' src={image} alt="" /></div>
               <div className='p-4 min-h-20 font-semibold text-xl'>
                 {title}
               </div>
                <div className='flex justify-between p-4'>
                    <div className='flex items-center gap-2'><img className='bg-no-repeat' src={download} alt="" />
                    <h1>{(reviews / 1_000_000).toFixed(0) + 'M'}</h1>
                    
                    </div>
                    <div className='flex items-center gap-2 '>
                        <img src={star} alt="" />
                       {ratingAvg}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleApp;