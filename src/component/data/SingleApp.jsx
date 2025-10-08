import React from 'react';
import download from '../../assets/icon-downloads.png'

const SingleApp = ({data}) => {
    console.log(data)

    const {companyName,description,id,image,ratingAvg,ratings,reviews,size,title}=data
    return (
        <div>
            <div>

                <div><img className='w-[316px] h-[316px] object-contain' src={image} alt="" /></div>
                <div className='flex'>
                    <div className='flex'><img className='bg-no-repeat' src={download} alt="" />
                    <h1>{ratingAvg}</h1>
                    
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleApp;