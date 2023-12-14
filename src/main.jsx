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
import BkkbNotice from './pages/InfoList/Finance/BkkbNotice.jsx';
import StipendProgram from './pages/InfoList/Training/StipendProgram.jsx';
import TrainingActivities from './pages/InfoList/Training/TrainingActivities.jsx';
import MathTraining from './pages/InfoList/Training/MathTraining.jsx';
import TaxCircular from './pages/InfoList/Law/TaxCircular.jsx';
import Result from './pages/InfoList/Admission/Result.jsx';

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
      {
        path:"/bkkbnotice",
        element:<BkkbNotice></BkkbNotice>
      },
      {
        path:"/stipendprogram",
        element:<StipendProgram></StipendProgram>
      },
      {
        path:"/trainingactivities",
        element:<TrainingActivities></TrainingActivities>
      },
      {
        path:"/mathtraining",
        element:<MathTraining></MathTraining>
      },
      {
        path:"/taxcircular",
        element:<TaxCircular></TaxCircular>
      },
      {
        path:"/result",
        element:<Result></Result>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-slate-100 w-[850px] md:w-full h-full lg:px-12 lg:py-12'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
