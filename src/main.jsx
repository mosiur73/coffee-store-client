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
import Main from './component/Main/Main.jsx';
import Provider from './Provider/Provider.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import Users from './component/Users/Users.jsx';
import Login from './component/Login/Login.jsx';


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
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:5000/users')
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
