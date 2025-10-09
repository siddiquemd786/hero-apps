// src/component/AppDetails/AppDetails.jsx
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import reveiwImg from '../../assets/icon-review.png'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
const AppDetails = () => {

    const {id}=useParams();
    const data=useLoaderData()
    const singleData= data.find(app=>app.id===id)
    const {image,title,companyName,downloads,ratingAvg,reviews,ratings,description}=singleData
    

   

    const ratingsData=ratings.map(ratingData=> {
        const ratings={
           rat:ratingData.name ,
           count:ratingData.count
           
        }
        return ratings
        
    })
   const sortedRatings = [...ratingsData].sort((a, b) => b.count - a.count);


    return (
        <div>
            <div className='flex mt-20 w-11/12'>
                <div className='flex justify-center w-1/3'><img className='   w-[316px] h-[316px]  object-contain' src={image} alt="" /></div>
                <div className='w-2/3 '>
                    <div className='border-b-2 border-amber-200'>
                        <h1 className='text-[32px] font-bold'>{title}</h1>
                    <p>Developed By: <span className='text-blue-800 text-xl'>{companyName}</span></p>
                    </div>
                    <div>
                        <div className='flex mt-8 items-center justify-between'>
                            <div className=''>
                                <img src={downloadImg} alt="" />
                                <p>download</p>
                                 <h1 className='text-[40px] font-extrabold'>{(downloads / 1_000_0000).toFixed(0) + 'M'}</h1>
                            </div>
                            <div className=''>
                                <img src={star} alt="" />
                                <p>Average Ratings</p>
                                 <h1 className='text-[40px] font-extrabold'>{(ratingAvg ).toFixed(0) + 'M'}</h1>
                            </div>
                            <div className=''>
                                <img src={reveiwImg} alt="" />
                                <p>Total Reviews</p>
                                 <h1 className='text-[40px] font-extrabold'>{(reviews / 1_000_0000).toFixed(0) + 'M'}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>

            <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold ml-8'>Ratings</h1>
 <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer>
                <BarChart
  width={1000}
  height={250}
  data={sortedRatings} 
  layout="vertical"
  barCategoryGap="0%"   
  barGap={0}          
  barSize={30}
  margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
>
  <XAxis type="number" />
  <YAxis dataKey="rat" type="category" />

  <Bar dataKey="count" fill="#FF8811" />
</BarChart>


            </div>
            <div className='my-5 w-11/12 mx-auto'>
                <h1 className='text-2xl font-semibold'>Description</h1>
                {description}
            </div>
            
        </div>
    );
};

export default AppDetails;