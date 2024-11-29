import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee.jsx';
import UpdataCoffee from './component/UpdataCoffee.jsx';
import Home from './component/Home/Home.jsx';
import Coffee from './component/Coffee/Coffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
  },
  {
    path:"/addcoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"/updatecoffee/:id",
    element:<UpdataCoffee></UpdataCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:"/coffe",
    element:<Coffee></Coffee>,
    loader:()=>fetch('http://localhost:5000/coffee')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
