
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
import Alldetails from './Components/AllDetails/Alldetails';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import CoursesData from './Components/CoursesData/CoursesData';
import Faq from './Components/Faq/Faq';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
     {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
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
          path:'/faq',
          element:<Faq></Faq>
          
        },
        {
          path: '/courses/:id',
          element:<CoursesData></CoursesData>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
          path: '/allCourses/:id',
          element: <PrivateRoute> <Alldetails></Alldetails></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/allcourses/${params.id}`)
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
