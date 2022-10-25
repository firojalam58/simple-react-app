
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

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
