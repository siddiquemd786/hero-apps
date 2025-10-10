// src/component/data/SingleApp.jsx
import React from 'react';
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const SingleApp = ({ data }) => {
  const { image, ratingAvg, reviews, title, id } = data; 

  return (
    <Link to={`/appDetails/${id}`}> 
      <div className="p-4 border border-amber-100 shadow-lg rounded-sm">
        <div className="flex justify-center">
          <img className="w-[316px] h-[316px] object-contain" src={image} alt={title} />
        </div>

        <div className="p-4 min-h-20 font-semibold text-xl">
          {title}
        </div>

        <div className="flex justify-between p-4">
          <div className="flex items-center gap-2">
            <img src={download} alt="downloads" />
            <h1>{(reviews / 1_000_000).toFixed(0) + "M"}</h1>
          </div>

          <div className="flex items-center gap-2">
            <img src={star} alt="rating" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
