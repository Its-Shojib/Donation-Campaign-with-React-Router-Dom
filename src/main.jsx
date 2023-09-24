import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider} from "react-router-dom";

import './index.css'
import myCreatedRoute from './Route/Route';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute} />
  </React.StrictMode>,
)
