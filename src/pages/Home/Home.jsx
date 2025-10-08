import React from 'react';
import Banner from '../../component/banner/Banner';
import TrustedZone from '../../component/Trusted/TrustedZone';
import { useLoaderData } from 'react-router';
import SingleApp from '../../component/data/SingleApp';

const Home = () => {

const dataApp=useLoaderData()


    return (
        <div>


         <Banner></Banner>
         <TrustedZone></TrustedZone>
         <div>

          <div className='grid grid-cols-4'>
              {
                dataApp.map(data=> <SingleApp key={data.id} data={data}></SingleApp> )
            }
          </div>
         </div>
            
        </div>
    );
};

export default Home;