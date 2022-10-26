
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PrivateRoute from './Components/Private/PrivateRoute';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Course from './Components/Course/Course';

function App() {
  const router = createBrowserRouter([
     {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<PrivateRoute><About></About></PrivateRoute>
        },
        {
          path:'/blog',
          element:<PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
          path:'/course',
          element:<Course></Course>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
      ]
     },
  ])
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
