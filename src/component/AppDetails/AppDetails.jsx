// src/component/AppDetails/AppDetails.jsx
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import reveiwImg from '../../assets/icon-review.png'
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
const AppDetails = () => {

    const {id}=useParams();
    const data=useLoaderData()
    const singleData= data.find(app=>app.id===id)
    const {image,title,companyName,downloads,ratingAvg,reviews,ratings}=singleData
    

   

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

            <div>

                <BarChart
  width={800}
  height={500}
  data={sortedRatings} // ✅ Sorted data used here
  layout="vertical"
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
  <XAxis type="number" />
  <YAxis dataKey="rat" type="category" />
  <Bar dataKey="count" fill="yellow" />
</BarChart>


            </div>
            
        </div>
    );
};

export default AppDetails;