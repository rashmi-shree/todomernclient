import './App.css';
import Body from './components/Body';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar';
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Todo from "./components/Todo";
const AppLoyout = () =>{
  return(
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLoyout />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/home',
        element:<Home />
      },
      {
        path:'/aboutus',
        element:<AboutUs />
      },
      {
        path:'/todo',
        element:<Todo />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:"/signup",
        element:<SignUp />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
