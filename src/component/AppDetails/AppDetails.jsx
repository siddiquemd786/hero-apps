
import React, { useEffect, useState } from 'react';
import { Navigate, useLoaderData, useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import downloadImg from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import reveiwImg from '../../assets/icon-review.png'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';




const AppDetails = () => {

    const {id}=useParams();
    const data=useLoaderData()
    const singleData= data.find(app=>app.id===id)
    const {image,title,companyName,downloads,ratingAvg,reviews,ratings,description,size,}=singleData
    
    const ratingsData=ratings.map(ratingData=> {
        const ratings={
           rat:ratingData.name ,
           count:ratingData.count
           
        }
        return ratings
        
    })
    const [install, setInstall] = useState(false);

    useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (storedData.some(app => app.id === id)) {
        setInstall(true);
    }
}, [id]);



   const handalerInstall = (id) => {
    const installedApp = JSON.parse(localStorage.getItem("installedApps")) || [];

  
    const exists = installedApp.some(app => app.id === id);
    if (exists) {
        alert("hello")
       
        setInstall(true);
        return;
    }

    installedApp.push(singleData);
    localStorage.setItem("installedApps", JSON.stringify(installedApp));

    setInstall(true);
    Navigate("/installations");
};




   const sortedRatings = [...ratingsData].sort((a, b) => b.count - a.count);


    return (
        <div>
            <div className='md:flex mt-20 w-11/12'>
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full px-4 md:px-8 gap-6">

  <div className="w-full md:w-1/3 flex justify-center">
    <img className="w-64 h-64 sm:w-72 sm:h-72 md:w-[316px] md:h-[316px] object-contain" src={image} alt="" />
  </div>

 
  <div className="w-full md:w-2/3">
    <div className="border-b-2 border-amber-200 pb-4">
      <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold">{title}</h1>
      <p className="text-base sm:text-lg">Developed By: <span className="text-blue-800">{companyName}</span></p>
    </div>

 
    <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 justify-between gap-4 sm:gap-6">
      
    
      <div className="flex flex-col items-center">
        <img src={downloadImg} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
        <p className="text-sm sm:text-base">Downloads</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{(downloads / 1_000_0000).toFixed(0)}M</h1>
      </div>

    
      <div className="flex flex-col items-center">
        <img src={star} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
        <p className="text-sm sm:text-base">Average Ratings</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{ratingAvg.toFixed(0)}</h1>
      </div>

    
      <div className="flex flex-col items-center">
        <img src={reveiwImg} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
        <p className="text-sm sm:text-base">Total Reviews</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{(reviews / 1_000_0000).toFixed(0)}M</h1>
      </div>

    </div>

   
    <div className="mt-6 flex justify-center md:justify-start">
      <button
        onClick={() => {
          handalerInstall(id);
          toast.success("App Installed Successfully!");
        }}
        disabled={install}
        className={`w-full sm:w-[239px] h-12 sm:h-[52px] rounded-sm text-white text-lg sm:text-xl font-semibold ${
          install ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
        }`}
      >
        {install ? "Installed" : "Install Now"} {size}MB
      </button>
    </div>

  </div>
</div>


                <div>

                </div>
            </div>

           <div className='w-11/12 mx-auto'>
  <h1 className='text-2xl font-semibold ml-2 sm:ml-8 mb-4'>Ratings</h1>

  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={sortedRatings}
        layout="vertical"
        barCategoryGap="20%"   
        barGap={4}          
        barSize={20}
        margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
      >
        <XAxis type="number" />
        <YAxis dataKey="rat" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#FF8811" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

            <div className='my-5 w-11/12 mx-auto'>
                <h1 className='text-2xl font-semibold'>Description</h1>
                {description}
            </div>
            
        </div>
    );
};

export default AppDetails;