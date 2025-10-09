// src/routes/Routes.jsx
import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/ErrorPages/Errorpage';
import Home from '../pages/Home/Home';
import Apps from '../component/apps/Apps';
import Installation from '../component/installation/Installation';





 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {   index:true,
            path:'/',
                loader: ()=>fetch('app.json'),
           
           Component:Home
            
        },
        
        {
          path:'/apps',
          loader: ()=>fetch('allapps.json'),
          Component:Apps
        },
        {
          path:"/installations",
          Component:Installation
        }
    ]
  },
]);

