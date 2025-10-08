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
            Component:Home
            
        },{
          path:'/apps',
          Component:Apps
        },
        {
          path:"/installations",
          Component:Installation
        }
    ]
  },
]);

