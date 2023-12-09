import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Monitor from './pages/InfoList/Educaion/Monitor.jsx';
import SchoolLevel from './pages/InfoList/Educaion/SchoolLevel.jsx';
import Retired from './pages/InfoList/Finance/Retired.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/monitoringboard",
        element:<Monitor></Monitor>
      },
      {
        path:"/schoollevelapa",
        element:<SchoolLevel></SchoolLevel>
      },
      {
        path:"/retiredpension",
        element:<Retired></Retired>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-slate-100 w-full h-full lg:px-12 lg:py-12'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
